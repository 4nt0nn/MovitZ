import * as Types from "../../actions/Types";

/**
 * Initial state object.
 */
const INIT_STATE = {
  loading: false,
  error: false,
  success: false,
  data: null,
};

/**
 * Arrow function reducer for the call action cases.
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
        data: payload,
      };
    case Types.FAILED_TO_FETCH_MOVIES:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default MovieReducer;
