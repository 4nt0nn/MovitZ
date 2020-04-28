import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import AuthReducer from "../auth";
import MovieReducer from "../movie";

/**
 * Root reducer.
 */
export default combineReducers({
  tmdb: MovieReducer,
  auth: AuthReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
