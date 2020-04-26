import axios from "axios";

const API_KEY = "631def957d78f448801140b460e86535";
// const BASE_URL = "https://api.themoviedb.org/3/movie/550?api_key=";
const BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=";

export const getMovies = (searchWord) => {
  return axios({
    method: "get",
    url: `${BASE_URL}${API_KEY}&query=${searchWord}`,
    //   headers: {
    //     Authorization: `Bearer ${data.accessToken.jwtToken}`
    //   }
  });
};
