import React from "react";

const SignIn = () => {
  return (
    <div className="row container">
      <form className="col s12 center">
        <h5>Sign in</h5>
        <div className="input-field">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">enhanced_encryption</i>
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
        <button className={"btn"}>Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
