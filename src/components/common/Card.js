import React from "react";
import { Link } from "react-router-dom";

import imagePlaceholder from "../../images/missing.png";

function Card(props) {
  const { onAddToWatchHandler, onAddToFavouritesHandler } = props;
  const { title, id, poster_path, release_date, popularity } = props.card;
  return (
    <div className="col s12 m4 l4">
      <div className="card horizontal">
        <Link to={`movies/${id}`} className="card-image">
          <img
            src={
              poster_path != null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imagePlaceholder
            }
            alt={`${title}'s poster`}
          />
        </Link>
        <div className="card-stacked">
          <div className="card-content">
            <span class="card-title">{title}</span>
            <p>Release date: {release_date}</p>
            <p className={"grey-text ligthen-2"}>Grade: {popularity}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() =>
                onAddToWatchHandler({
                  title: title,
                  poster_path: poster_path,
                  id: id,
                })
              }
              class="btn halfway-fab waves-effect waves-light blue"
            >
              <i class="material-icons">add_to_queue</i>
            </button>
            <button
              onClick={() =>
                onAddToFavouritesHandler({
                  title: title,
                  poster_path: poster_path,
                  id: id,
                })
              }
              class="btn halfway-fab waves-effect waves-light blue"
            >
              <i class="material-icons">folder_special</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
