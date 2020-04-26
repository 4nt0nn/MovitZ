import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className={"right"}>
      <NavLink
        to={"/"}
        id={"dropdown"}
        className={"btn btn-floating red lighten-1 dropdown-trigger"}
        data-target={"dropdown-body"}
      >
        AS
      </NavLink>
      <ul id={"dropdown-body"} className={"dropdown-content"}>
        <li>
          <NavLink to={"#!"}>Sign Out</NavLink>
        </li>
        <li>
          <NavLink to={"/signin"}>Sign In</NavLink>
        </li>
        <li>
          <NavLink to={"/registration"}>Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Links;
