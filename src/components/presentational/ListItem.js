import React from "react";
import { Link } from "react-router-dom";

import imagePlaceholder from "../../images/missing.png";

/**
 * Functional component for rendering the
 * abbreviation of a movie as a list item
 * in the side navigation.
 *
 * @param {Object} props - Movie object fetched from firebase.
 */
const ListItem = (props) => {
  const { removeMovie, item } = props;
  return (
    <div className="list-item-sidenav">
      <li className={"collection-item avatar valign-wrapper"}>
        <Link to={`/movies/${item.id}`} className={"movie-link-sidenav"}>
          <img
            src={
              item.poster_path != null
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : imagePlaceholder
            }
            alt={`${item.title}'s poster`}
            className={"circle"}
          />

          <span className={"title"}>{item.title}</span>
        </Link>
        <button
          onClick={() => removeMovie(item.fsKey)}
          className={
            "btn-floating btn-small waves-effect waves-light red secondary-content delete-btn"
          }
        >
          <i className={"material-icons"}>delete_forever</i>
        </button>
      </li>
    </div>
  );
};

export default ListItem;
