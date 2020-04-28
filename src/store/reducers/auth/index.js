import * as Types from "../../actions/Types";

/**
 * Initial state object.
 */
const INIT_STATE = {
  loading: false,
  error: false,
  success: false,
};

/**
 * Arrow function reducer for the auth action types.
 *
 * @param {object} state
 * @param {object} action
 */
const AuthReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.TRY_TO_SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESSFULLY_SIGNED_IN:
      return {
        ...state,
        success: true,
      };
    case Types.FAILED_TO_SIGN_IN:
      return {
        ...state,
        error: true,
      };
    case Types.TRY_TO_SIGN_OUT:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESSFULLY_SIGNED_OUT:
      return {
        ...state,
        success: true,
      };
    case Types.FAILED_TO_SIGN_OUT:
      return {
        ...state,
        error: true,
      };
    case Types.TRY_TO_CREATE_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESSFULLY_CREATED_ACCOUNT:
      return {
        ...state,
        success: true,
      };
    case Types.FAILED_TO_CREATE_ACCOUNT:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
