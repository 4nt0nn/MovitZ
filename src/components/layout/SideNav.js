import React, { useEffect, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import ListItem from "../common/ListItem";

const SideNav = (props) => {
  const collapsible = useRef();
  useEffect(() => {
    M.Collapsible.init(collapsible.current, { accordion: true });
  });
  const { later, favourites } = props;
  return (
    <ul id={"nav-mobile"} className={"collection"}>
      <li className={"no-padding collection-item"}>
        <ul ref={collapsible} className={"collapsible"}>
          <li className={""}>
            <div className={"collapsible-header waves-effect"}>
              <i className="material-icons before">watch_later</i>
              Watch later
            </div>
            <div className="collapsible-body">
              <ul>
                {later.map((item) => {
                  return (
                    <ListItem
                      title={item.title}
                      poster_path={item.poster_path}
                      id={item.id}
                    />
                  );
                })}
              </ul>
            </div>
          </li>
          <li>
            <div className={"collapsible-header waves-effect"}>
              <i className="material-icons before">movie_filter</i>
              Favourites
            </div>
            <div className="collapsible-body">
              <ul>
                {favourites.map((item) => {
                  return (
                    <ListItem
                      title={item.title}
                      poster_path={item.poster_path}
                      id={item.id}
                    />
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SideNav;
