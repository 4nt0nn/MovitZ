import * as Types from "../../actions/Types";

/**
 * Initial state object.
 */
const INIT_STATE = {
  loading: false,
  error: false,
  success: false,
  movies: null,
  movie: null,
};

/**
 * Arrow function reducer for the movie action types.
 *
 * @param {object} state
 * @param {object} action
 */
const MovieReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.TRY_TO_FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESSFULLY_FETCHED_MOVIES:
      return {
        ...state,
        success: true,
        movies: payload,
      };
    case Types.FAILED_TO_FETCH_MOVIES:
      return {
        ...state,
        error: true,
      };
    case Types.TRY_TO_FETCH_MOVIE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESSFULLY_FETCHED_MOVIE_BY_ID:
      return {
        ...state,
        success: true,
        movie: payload,
      };
    case Types.FAILED_TO_FETCH_MOVIE_BY_ID:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default MovieReducer;
