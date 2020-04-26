import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3/movie/550?api_key=";
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

export const getMovies = (searchWord) => {
  return axios({
    method: "get",
    url: `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchWord}`,
  });
};
