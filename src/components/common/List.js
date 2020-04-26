import React from "react";
import Card from "./Card";

function List(props) {
  const { onAddToWatchHandler, onAddToFavouritesHandler } = props;
  return props.cards.map((card) => {
    return (
      <Card
        card={card}
        onAddToWatchHandler={onAddToWatchHandler}
        onAddToFavouritesHandler={onAddToFavouritesHandler}
      />
    );
  });
}

export default List;
