import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import Links from "../common/Links";
import SideNav from "./SideNav";

function Navbar() {
  const [favourites, addToFavourites] = useState([]);
  const [toBeWatched, addToBeWatched] = useState([]);

  useEffect(() => {
    const sideNav = document.getElementById("slide-out");
    const dropdown = document.getElementById("dropdown");
    M.Sidenav.init(sideNav, { draggable: true });
    M.Dropdown.init(dropdown, { alignment: "right" });
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
        <SideNav favourites={favourites} later={toBeWatched} />
      </ul>
    </div>
  );
}

export default Navbar;
