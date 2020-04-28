import React from "react";
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Navbar from "./components/layout/Navbar";
import Router from "./components/router";
import AuthIsLoaded from "./components/authentication/AuthIsLoaded";

/**
 * Main app component holding our router
 * and top navbar.
 */
function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div className={"App"}>
          <Navbar />
          <Router />
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
