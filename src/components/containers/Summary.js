import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { tryAddMovie, tryGetMovie } from "../../store/actions/movie";
import imagePlaceholder from "../../images/missing.png";
import Loading from "../presentational/Loading";
import Card from "../presentational/Card";

/**
 * Functional component for rendering
 * the movie summary page of the application.
 *
 * Handles the dispatch of action creators
 * for fetching a specific movie
 * from TMDBs API
 *
 * Handles adding movies to the firestore database.
 *
 */
const Summary = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const { id } = useParams();
  const movie = useSelector((state) => state.tmdb.movie);
  const auth = useSelector((state) => state.firebase.auth);

  const boundAddMovies = (firestore, auth, movie, favourite) =>
    dispatch(tryAddMovie(firestore, auth, movie, favourite));

  useEffect(() => {
    dispatch(tryGetMovie(id));
  }, [dispatch, id]);

  const onAddToMoviesHandler = (movie, favourite) => {
    boundAddMovies(firestore, auth, movie, favourite);
  };

  if (movie) {
    const { backdrop_path, title, overview, genres } = movie;
    const movieGenres = genres.map((genre) => (
      <p key={genre.id} className={"yellow-text darken-3"}>
        {genre.name}
      </p>
    ));
    return (
      <div className={"row summary-container"}>
        <div className={"summary-image-container"}>
          <Link
            to={"/"}
            className={
              "btn-floating btn-small waves-effect waves-light grey darken-3 summary-back-link"
            }
          >
            <i className={"material-icons"}>keyboard_arrow_left</i>
          </Link>
          <img
            className={"movie-backdrop"}
            src={
              backdrop_path != null
                ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                : imagePlaceholder
            }
            alt={`${title}'s poster`}
          />
          <div className={"summary-movie-title-card-overview"}>
            <h5 className={"white-text summary-movie-title"}>{title}</h5>

            <div className={"summary-card"}>
              <Card
                addToWatchLater={(movie) => onAddToMoviesHandler(movie, false)}
                addToFavourites={(movie) => onAddToMoviesHandler(movie, true)}
                displayTitle={false}
                card={movie}
              />
            </div>
            <div className={"summary-overview-genres"}>
              <p className={"grey-text lighten-4 summary-movie-overview"}>
                {overview ? overview : "This movie has not summary"}
              </p>
              {movieGenres}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading text={"Loading content..."} />;
  }
};

export default Summary;
