import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import Loading from "../presentational/Loading";

/**
 * Functional component to check if auth state
 * is loaded, if not it will return a loading screen
 * otherwise it will return the child components.
 *
 * @param {object} param0 - child components.
 */
const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Loading text={"Loading content..."} />;
  return children;
};

export default AuthIsLoaded;
