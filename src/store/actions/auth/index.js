import * as Types from "../Types";
import * as functions from "../../../helpers/functions";

/**
 * Sign in action creator used to sign a user in to
 * the application using the firebase API method.
 *
 * @param {object} firebase - firebase object with API methods
 * @param {object} credentials - Containing the user email and password
 */
export const tryToAuthenticate = (firebase, credentials) => {
  return (dispatch, getState) => {
    dispatch({ type: Types.TRY_TO_SIGN_IN });
    firebase
      .login({
        email: credentials.email,
        password: credentials.password,
      })
      .then(() => {
        dispatch({ type: Types.SUCCESSFULLY_SIGNED_IN });
        functions.toastFunction("Successfully signed in", true);
      })
      .catch(() => {
        dispatch({ type: Types.FAILED_TO_SIGN_IN });
        functions.toastFunction("Failed to sign in", false);
      });
  };
};

/**
 * Registration action creator used to register a new
 * user to firebase and automatically signing in the new
 * user.
 *
 * @param {object} firebase - firebase object with API methods
 * @param {object} credentials - Containing the user email and password
 */
export const tryToRegister = (firebase, credentials) => {
  return (dispatch, getState) => {
    dispatch({ type: Types.TRY_TO_CREATE_ACCOUNT });
    firebase
      .createUser({
        email: credentials.email,
        password: credentials.password,
      })
      .then(() => {
        dispatch({ type: Types.SUCCESSFULLY_CREATED_ACCOUNT });
        functions.toastFunction("Your registration was successfull!", true);
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: Types.FAILED_TO_CREATE_ACCOUNT });
        functions.toastFunction("Failed to register account", false);
      });
  };
};

/**
 * Sign out action creator used to sign out of
 * firebase and dispatch action types depending on the
 * result of the attempt.
 *
 * @param {object} firebase - firebase object with API methods
 */
export const tryToSignOut = (firebase) => {
  return (dispatch, getState) => {
    dispatch({ type: Types.TRY_TO_SIGN_OUT });
    firebase
      .logout()
      .then(() => {
        dispatch({ type: Types.SUCCESSFULLY_SIGNED_OUT });
        functions.toastFunction("Successfully signed out", true);
      })
      .catch(() => {
        dispatch({ type: Types.FAILED_TO_SIGN_OUT });
        functions.toastFunction("Failed to sign out", false);
      });
  };
};
