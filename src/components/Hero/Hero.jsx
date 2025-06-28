import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../UI/Button";
import {
  Container,
  StyledHero,
} from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Ambil movie trending dulu
    async function fetchTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios.get(URL);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    // Lalu ambil detail movie berdasarkan id dari trending
    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios.get(URL);
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  if (!movie) return <Container>Loading...</Container>;

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>
            {movie.genres?.map((genre) => genre.name).join(", ")}
          </h3>
          <p>{movie.overview}</p>
          <Button>
            <a
              href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }}
            >
              Watch Trailer
            </a>
          </Button>
        </div>
        <div>
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : "https://via.placeholder.com/500x281?text=No+Image"
            }
            alt={movie.title}
          />
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;
