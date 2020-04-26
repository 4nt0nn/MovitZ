import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../containers/Dashboard";
import Summary from "../containers/Summary";

/**
 * Functional router component for
 * navigation between the application pages.
 */
const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Dashboard} />
      <Route exact path={"/movies/{id}"} component={Summary} />
    </Switch>
  );
};

export default Router;
