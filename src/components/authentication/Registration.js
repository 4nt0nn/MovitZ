import React from "react";

const Registration = () => {
  return (
    <div className="row container">
      <form className="col s12 center">
        <h5>Register a new account</h5>
        <div class="row">
          <div class="input-field col s6">
            <i className="material-icons prefix">edit</i>
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">enhanced_encryption</i>
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className={"btn"}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
