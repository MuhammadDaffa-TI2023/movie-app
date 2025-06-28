import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      try {
        const response = await axios(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <Hero />

      <Movies title="Popular Movies" movies={movies} setMovies={setMovies} />
    </>
  );
}

export default PopularMovie;
