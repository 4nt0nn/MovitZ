import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

/**
 * Using axios to conduct the api call to fetch
 * a list of movies from TMDBs API.
 *
 * @param {string} searchWord - The word to use in the search.
 */
export const getMovies = (searchWord) => {
  return axios({
    method: "get",
    url: `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchWord}`,
  });
};

/**
 * Using axios to conduct the api call to fetch
 * a specific movie from TMDBs API.
 *
 * @param {int} id - Id of the movie to fetch from TMDBs API.
 */
export const getMovie = (id) => {
  return axios({
    method: "get",
    url: `${BASE_URL}movie/${id}?api_key=${API_KEY}`,
  });
};
