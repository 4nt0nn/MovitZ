import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";

import { tryDeleteMovie } from "../../store/actions/movie";
import ListItem from "../presentational/ListItem";

/**
 * Functional component for rendering the
 * side navigation.
 *
 * Handles fetching and filtering movies
 * from the firestore database.
 */
const SideNav = () => {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);

  const boundDeleteMovies = (firestore, fsKey, auth) =>
    dispatch(tryDeleteMovie(firestore, fsKey, auth));
  const onDeleteMoviesHandler = (fsKey) => {
    boundDeleteMovies(firestore, fsKey, auth);
  };

  const collapsible = useRef();
  useEffect(() => {
    M.Collapsible.init(collapsible.current, { accordion: true });
  });

  useFirestoreConnect([
    auth.uid
      ? {
          collection: "users",
          doc: auth.uid,
          subcollections: [{ collection: "movies" }],
          storeAs: "movies",
        }
      : { collection: "users" }, // Ugly crash fix when signed out and unable to fetching subcollections
  ]);
  const savedMovies = useSelector((state) => state.firestore.data.movies);
  /**
   * Function used to convert from object to list and filter only
   * watch later or favourite movies.
   * @param {boolean} favourite - filter for favourites or not
   */
  const filterMovies = (favourite) => {
    return savedMovies
      ? Object.keys(savedMovies)
          .map((key) => {
            return { ...savedMovies[key], fsKey: key };
          })
          .filter((movie) => movie.favourite === favourite)
      : [];
  };

  return (
    <ul id={"nav-mobile"} className={"collection"}>
      <li className={"no-padding collection-item"}>
        <ul ref={collapsible} className={"collapsible"}>
          <li>
            <div className={"collapsible-header waves-effect"}>
              <i className={"material-icons before"}>watch_later</i>
              Watch later
            </div>
            <div className={"collapsible-body"}>
              {auth.uid ? (
                <ul>
                  {filterMovies(false).map((item) => {
                    return (
                      <ListItem
                        key={item.fsKey}
                        item={item}
                        removeMovie={(fsKey) => onDeleteMoviesHandler(fsKey)}
                      />
                    );
                  })}
                </ul>
              ) : (
                <p className={"center grey-text ligthen-3"}>
                  Sign in to access your list
                </p>
              )}
            </div>
          </li>
          <li>
            <div className={"collapsible-header waves-effect"}>
              <i className={"material-icons before"}>movie_filter</i>
              Favourites
            </div>
            <div className={"collapsible-body"}>
              {auth.uid ? (
                <ul>
                  {filterMovies(true).map((item) => {
                    return (
                      <ListItem
                        key={item.fsKey}
                        item={item}
                        removeMovie={(id) => onDeleteMoviesHandler(id)}
                      />
                    );
                  })}
                </ul>
              ) : (
                <p className={"center grey-text ligthen-3"}>
                  Sign in to access your favourites
                </p>
              )}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SideNav;
