import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import Links from "../common/Links";

function Navbar() {
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const sideNav = document.getElementById("slide-out");
    M.Sidenav.init(sideNav, { draggable: true });
  });

  return (
    <div>
      <nav className={"nav-wrapper grey darken-4"}>
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
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
