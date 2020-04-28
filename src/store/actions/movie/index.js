import * as API from "../../API";
import * as Types from "../Types";
import * as functions from "../../../helpers/functions";

/**
 * Action creator returning a function
 * that takes in dispatch and getState as arguments
 * and dispatches action types based on result of API
 * call
 *
 * - This function is used to fetch a list of movies
 *   from the TMDB API.
 *
 * @param {string} searchWord - word to use in the search of a movie.
 */
export const tryGetMovies = (searchWord) => {
  return (dispatch, getState) => {
    dispatch({ type: Types.TRY_TO_FETCH_MOVIES });

    if (searchWord.length >= 3) {
      API.getMovies(searchWord)
        .then((res) => {
          dispatch({
            type: Types.SUCCESSFULLY_FETCHED_MOVIES,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: Types.FAILED_TO_FETCH_MOVIES, payload: [] });
        });
    } else {
      functions.toastFunction("Please type more 3 characters or more.", false);
    }
  };
};

/**
 * Action creator returning a function
 * that takes in dispatch and getState as arguments
 * and dispatches action types based on result of API
 * call
 *
 * - This function is used to fetch a single movie
 *   from the TMDB API.
 *
 * @param {int} id - id of the movie.
 */
export const tryGetMovie = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: Types.TRY_TO_FETCH_MOVIE_BY_ID });
    API.getMovie(id)
      .then((res) => {
        dispatch({
          type: Types.SUCCESSFULLY_FETCHED_MOVIE_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Types.FAILED_TO_FETCH_MOVIE_BY_ID, payload: {} });
        functions.toastFunction(
          "Could not fetch the movie... Try again in a moment.",
          false
        );
      });
  };
};

/**
 * Action creator returning a function
 * that takes in dispatch and getState as arguments
 * and dispatches action types based on result of API
 * call
 *
 * - This function is used to add a movie to the
 *   Firestore database.
 *
 * @param {object} firestore - Containing the firestore API methods.
 * @param {object} auth - Authentication object from firebase.
 * @param {object} movie - The movie that the user wants to save.
 * @param {boolean} favourite - Determines if this is a favourite or watch later movie.
 *
 */
export const tryAddMovie = (firestore, auth, movie, favourite) => {
  return (dispatch, getState) => {
    const movieToSave = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      favourite: favourite,
    };

    const toastText = `Movie was added to your ${
      favourite ? "favourties" : "watchlist"
    }!`;

    if (!auth.uid) {
      functions.toastFunction("You have to be signed in to add a movie", false);
      dispatch({
        type: Types.FAILED_TO_ADD_THE_MOVIE,
      });
    } else {
      firestore
        .collection("users")
        .doc(auth.uid)
        .collection("movies")
        .add(movieToSave)
        .then(() => {
          dispatch({
            type: Types.SUCCESSFULLY_ADDED_THE_MOVIE,
          });
          functions.toastFunction(toastText, true);
        })
        .catch(() => {
          dispatch({
            type: Types.FAILED_TO_ADD_THE_MOVIE,
          });
          functions.toastFunction(toastText, false);
        });
    }
  };
};

/**
 * Action creator returning a function
 * that takes in dispatch and getState as arguments
 * and dispatches action types based on result of API
 * call
 *
 * - This function is used to remove a movie from the
 *   Firestore database.
 *
 * @param {object} firestore - Containing the firestore API methods.
 * @param {int} id - The id of the movie to be deleted from the database.
 */
export const tryDeleteMovie = (firestore, id, auth) => {
  return (dispatch, getState) => {
    firestore
      .collection("users")
      .doc(auth.uid)
      .collection("movies")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: Types.SUCCESSFULLY_ADDED_THE_MOVIE,
        });
        functions.toastFunction("The movie was removed!", true);
      })
      .catch(() => {
        dispatch({
          type: Types.FAILED_TO_ADD_THE_MOVIE,
        });
        functions.toastFunction("The movie could not be removed!", false);
      });
  };
};
