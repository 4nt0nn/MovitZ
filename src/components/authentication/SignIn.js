import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { tryToAuthenticate } from "../../store/actions/auth";

/**
 * Functional component for rendering
 * the sign in page and handling the
 * sign in logic.
 */
const SignIn = () => {
  const [credentials, setCredentials] = useState({});
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const boundSignIn = (firebase, credentials) =>
    dispatch(tryToAuthenticate(firebase, credentials));

  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    boundSignIn(firebase, credentials);
  };

  if (auth.uid) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <div className={"row container"}>
        <form onSubmit={onSubmitHandler} className={"col s12 center"}>
          <h5 className={"white-text"}>Sign in</h5>
          <div className={"row"}>
            <div className={"input-field col s12"}>
              <i className={"material-icons prefix white-text"}>email</i>
              <input
                onChange={(e) => onChangeHandler(e)}
                id={"email"}
                type={"email"}
                className={"validate white-text"}
              />
              <label htmlFor={"email"} className={"white-text"}>
                Email
              </label>
            </div>
            <div className={"input-field col s12"}>
              <i className={"material-icons prefix white-text"}>
                enhanced_encryption
              </i>
              <input
                onChange={(e) => onChangeHandler(e)}
                id={"password"}
                type={"password"}
                className={"validate white-text"}
              />
              <label htmlFor={"password"} className={"white-text"}>
                Password
              </label>
            </div>
          </div>
          <button type={"submit"} className={"btn"}>
            Sign in
          </button>
        </form>
      </div>
    );
  }
};

export default SignIn;
