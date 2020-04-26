import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <ul className={"right"}>
      <li>
        <NavLink to={"/"}>Sign out</NavLink>
      </li>
      <li>
        <NavLink to={"/"} className={"btn btn-floating red lighten-1"}>
          AS
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
