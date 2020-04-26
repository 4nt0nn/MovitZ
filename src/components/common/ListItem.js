import React from "react";
import { Link } from "react-router-dom";

import imagePlaceholder from "../../images/missing.png";

function ListItem(props) {
  return (
    <Link to={`/movies/${props.id}`}>
      <li class="collection-item avatar valign-wrapper">
        <img
          src={
            props.poster_path != null
              ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
              : imagePlaceholder
          }
          alt={`${props.title}'s poster`}
          class="circle"
        />
        <span class="title">{props.title}</span>
        <i class="material-icons">grade</i>
      </li>
    </Link>
  );
}

export default ListItem;
