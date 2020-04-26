import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideNav from "../layout/SideNav";
import SearchBar from "../common/SearchBar";
import List from "../common/List";
import { tryGetMovies } from "../../store/actions/movie";

function Dashboard() {
  const [favourites, addToFavourites] = useState([]);
  const [toBeWatched, addToBeWatched] = useState([]);
  const dispatch = useDispatch();
  const boundGetMovies = (searchWord) => dispatch(tryGetMovies(searchWord));

  const onSearchHandler = (searchWord) => {
    if (searchWord.length >= 3) {
      boundGetMovies(searchWord);
    }
  };

  const movies = useSelector((state) => state.MovieReducer.data);
  //   const favourites = useSelector((state) => state);
  //   const toBeWatched = useSelector((state) => state);

  return (
    <div className={"row dashboard-container"}>
      <div className={"col l3 side-nav-container hide-on-med-and-down "}>
        <SideNav favourites={favourites} later={toBeWatched} />
      </div>
      <div className={"col s12 m12 l9"}>
        <h3 className={"center"}>MovitZ - King of movies</h3>
        <div className={"row"}>
          <SearchBar onSearch={(characters) => onSearchHandler(characters)} />
        </div>
        <div className={"row"}>
          {movies ? (
            <List
              cards={movies.results}
              onAddToWatchHandler={(movie) =>
                addToBeWatched([...toBeWatched, movie])
              }
              onAddToFavouritesHandler={(movie) =>
                addToFavourites([...favourites, movie])
              }
            />
          ) : (
            <h4 className={"center grey-text text-lighten-2 bold"}>
              Enter a searchword to fetch movies
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
