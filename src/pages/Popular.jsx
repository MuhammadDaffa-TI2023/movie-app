// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies'

function PopularMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

      const respone = await axios(URL);

      setMovies(respone.data.results);
    }

    fetchPopularMovie();
  }, []);
  return (
    <>
    <Hero />
    <Movies movies={movies}/>
      {/* <Navbar /> */}
      <h2>Popular Movie</h2>
      {/* <Footer /> */}
    </>
  );
}

export default PopularMovie;