import * as API from "../../API";
import * as Types from "../Types";

export const tryGetMovies = (characters) => {
  return (dispatch, getState) => {
    dispatch({ type: Types.TRY_TO_FETCH_MOVIES });
    API.getMovies(characters)
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
  };
};
