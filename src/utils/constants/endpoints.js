// utils/constants/endpoints.js

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,

  // Untuk detail dan rekomendasi movie dengan ID dinamis
  detail: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
  recommendations: (id) => `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
};

export default ENDPOINTS;
