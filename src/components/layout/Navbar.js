import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import Links from "../presentational/Links";
import SideNav from "./SideNav";

/**
 * Functional component for
 * rendering the navbar as well as
 * the slide out mobile menu.
 */
const Navbar = () => {
  useEffect(() => {
    const sideNav = document.getElementById("slide-out");
    const dropdown = document.getElementById("dropdown");
    M.Sidenav.init(sideNav, { draggable: true });
    M.Dropdown.init(dropdown, { alignment: "right" });
  });

  return (
    <div>
      <nav className={"nav-wrapper black"}>
        <div className={"container"}>
          <a
            href={"#!"}
            data-target={"slide-out"}
            className={"sidenav-trigger"}
          >
            <i className={"material-icons"}>menu</i>
          </a>
          <Link to={"/"} className={"brand-logo"}>
            MovitZ
          </Link>
          <Links />
        </div>
      </nav>
      <ul id={"slide-out"} className={"sidenav"}>
        <SideNav />
      </ul>
    </div>
  );
};

export default Navbar;
