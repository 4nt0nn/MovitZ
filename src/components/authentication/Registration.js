import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { tryToRegister } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import Loading from "../presentational/Loading";

/**
 * Functional component for rendering
 * the registartion page and handling the
 * registration logic.
 */
const Registration = () => {
  const [credentials, setCredentials] = useState({});
  const auth = useSelector((state) => state.firebase.auth);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const boundRegistration = (firebase, credentials) =>
    dispatch(tryToRegister(firebase, credentials));

  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    boundRegistration(firebase, credentials);
  };

  if (auth.uid) {
    return <Redirect to={"/"} />;
  } else if (loading) {
    return <Loading text={"Creating account..."} />;
  } else {
    return (
      <div className={"row container"}>
        <form onSubmit={onSubmitHandler} className={"col s12 center"}>
          <h5 className={"white-text"}>Register a new account</h5>
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
          <button className={"btn"}>Register</button>
        </form>
      </div>
    );
  }
};

export default Registration;
