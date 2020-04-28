import React from "react";
import Card from "./Card";

/**
 * Functional list component used to map movies
 * fetched from TMDB and rendering a card component
 * for each movie.
 *
 * @param {Object} props - Holding Card object and two handler functions.
 */
const List = (props) => {
  return props.cards.map((card) => {
    return (
      <Card
        displayTitle={true}
        key={card.id}
        card={card}
        addToFavourites={props.addToFavourites}
        addToWatchLater={props.addToWatchLater}
      />
    );
  });
};

export default List;
