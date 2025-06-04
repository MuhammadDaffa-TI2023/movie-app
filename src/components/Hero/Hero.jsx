import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../UI/Button";
import {
  Container,
  HeroSection,
  HeroLeft,
  HeroRight,
  HeroTitle,
  HeroGenre,
  HeroDescription,
  HeroImage,
  HeroButton,
  StyledHero,
} from "./Hero.styled";

// Mapping ID genre ke nama
const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

function Hero() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios.get(URL);
        const firstMovie = response.data.results[0];

        console.log("Fetched movie:", firstMovie); // DEBUG LOG

        const genreNames = firstMovie.genre_ids
          .map((id) => GENRE_MAP[id])
          .filter(Boolean);

        setMovie({
          title: firstMovie.title,
          genres: genreNames,
          overview: firstMovie.overview,
          backdrop_path: firstMovie.backdrop_path,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, []);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>Error: {error}</Container>;
  if (!movie) return <Container>No movie data found</Container>;

  // DEBUG LOG
  console.log("Movie state:", movie);

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <h2>{movie.title || "Untitled Movie"}</h2>
          <h3>
            {movie.genres?.length > 0
              ? movie.genres.join(", ")
              : "No genres available"}
          </h3>
          <p>{movie.overview || "No description available."}</p>
          <Button>
            <a
              href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
              target="_blank"
              rel="noopener noreferrer"
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
            alt={movie.title || "Movie Poster"}
          />
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;
