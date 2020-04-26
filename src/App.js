import React from "react";
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Navbar from "./components/layout/Navbar";
import Router from "./components/router";

/**
 * Main app component holding our router
 * and top navbar.
 */
function App() {
  return (
    <BrowserRouter>
      <div className={"App"}>
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
