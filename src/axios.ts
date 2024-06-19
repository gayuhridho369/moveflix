import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "./constants";

const api = axios.create({
  baseURL: TMDB_BASE_URL,
});

api.interceptors.request.use((config) => {
  const newConfig = config;

  newConfig.params = {
    ...newConfig.params,
    api_key: TMDB_API_KEY,
  };

  return newConfig;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default api;
