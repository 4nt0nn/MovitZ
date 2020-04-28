import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { tryToSignOut } from "../../store/actions/auth";

/**
 * Navbar links to be returned
 * conditionally depending on the auth
 * object.
 */
const Links = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const boundSignIn = (firebase) => dispatch(tryToSignOut(firebase));

  return (
    <div className={"right"}>
      <NavLink
        to={"#!"}
        id={"dropdown"}
        className={"btn btn-floating btn-small red accent-2 dropdown-trigger"}
        data-target={"dropdown-body"}
      >
        {auth.uid ? (
          <span className={"white-text"}>
            {auth.email.substring(0, 1).toUpperCase()}
          </span>
        ) : (
          <i className={"material-icons white-text"}>settings</i>
        )}
      </NavLink>
      <ul id={"dropdown-body"} className={"dropdown-content"}>
        {auth.uid ? (
          <li>
            <Link
              className={"red-text accent-2"}
              onClick={() => boundSignIn(firebase)}
              to={"#!"}
            >
              Sign Out
            </Link>
          </li>
        ) : (
          <div>
            <li>
              <NavLink className={"red-text accent-2"} to={"/signin"}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink className={"red-text accent-2"} to={"/registration"}>
                Register
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Links;
