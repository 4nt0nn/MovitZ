import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import imagePlaceholder from "../../images/missing.png";

/**
 *
 * @param {object} props - containing a card/movie object and
 * two functions addToFavourites and addToWatchLater for adding
 * a movie to firestore database.
 */
const Card = (props) => {
  const dropdown = useRef();

  useEffect(() => {
    M.Dropdown.init(dropdown.current, { alignment: "right" });
  });

  const { title, id, poster_path, popularity } = props.card;
  const { addToFavourites, addToWatchLater, displayTitle } = props;
  return (
    <div className={"col s12 m4 l3 movie-card"}>
      <div>
        <Link to={`movies/${id}`}>
          <span className={"badge yellow darken-3 z-depth-3"}>
            {popularity}
          </span>
          <img
            className={"movie-image"}
            src={
              poster_path != null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imagePlaceholder
            }
            alt={`${title}'s poster`}
          />
        </Link>
        <div className={"movie-card-misc"}>
          {displayTitle ? <p className={"white-text"}>{title}</p> : ""}
          <button
            onClick={() =>
              addToFavourites({
                title: title,
                poster_path: poster_path,
                id: id,
              })
            }
            className={
              "waves-effect waves-light btn-small red accent-2 add-to-btn"
            }
          >
            <i className={"material-icons left"}>grade</i>Favourite
          </button>
          <button
            onClick={() =>
              addToWatchLater({
                title: title,
                poster_path: poster_path,
                id: id,
              })
            }
            className={
              "waves-effect waves-light btn-small red accent-2 add-to-btn"
            }
          >
            <i className={"material-icons left"}>watch_later</i>Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
