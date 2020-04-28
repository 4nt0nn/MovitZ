import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

import SideNav from "../layout/SideNav";
import SearchBar from "../presentational/SearchBar";
import List from "../presentational/List";
import { tryGetMovies, tryAddMovie } from "../../store/actions/movie";

/**
 * Functional component for rendering
 * the dashboard like landing page of the application.
 *
 * Handles the search of movies and following dispatch
 * of action creators for fetching lists of movies
 * from TMDBs API
 *
 * Handles adding movies to the firestore database.
 *
 */
const Dashboard = () => {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const movies = useSelector((state) => state.tmdb.movies);
  const auth = useSelector((state) => state.firebase.auth);

  const boundAddMovies = (firestore, auth, movie, favourite) =>
    dispatch(tryAddMovie(firestore, auth, movie, favourite));
  const boundGetMovies = (searchWord) => dispatch(tryGetMovies(searchWord));

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    boundGetMovies(searchWord);
  };

  const onSearchWordChangeHandler = (word) => {
    setSearchWord(word);
  };

  const onAddToMoviesHandler = (movie, favourite) => {
    boundAddMovies(firestore, auth, movie, favourite);
  };

  return (
    <div className={"row dashboard-container"}>
      <div className={"col l2 side-nav-container hide-on-med-and-down "}>
        <SideNav />
      </div>
      <div className={"col s12 m12 l10"}>
        <h5 className={"grey-text lighten-5"}>
          {movies ? "Results" : "Search for a Movie"}
        </h5>
        <div className={"row"}>
          <SearchBar
            onSubmitSearch={(e) => onSearchSubmitHandler(e)}
            onSearch={(word) => onSearchWordChangeHandler(word)}
          />
        </div>
        <div className={"row movie-card-container center"}>
          {movies ? (
            <List
              cards={movies.results}
              addToFavourites={(movie) => onAddToMoviesHandler(movie, true)}
              addToWatchLater={(movie) => onAddToMoviesHandler(movie, false)}
            />
          ) : (
            <h3 className={"center grey-text lighten-5"}>
              If you like good and crapy movies, than this is the place to
              search for them!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
