import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../containers/Dashboard";
import Summary from "../containers/Summary";
import SignIn from "../authentication/SignIn";
import Registration from "../authentication/Registration";

/**
 * Functional router component for
 * navigation between the application pages.
 */
const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Dashboard} />
      <Route exact path={"/movies/:id"} component={Summary} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/registration"} component={Registration} />
    </Switch>
  );
};

export default Router;
