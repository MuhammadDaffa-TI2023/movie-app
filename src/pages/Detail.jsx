import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Button from "@/components/UI/Button";
import Movies from "@/components/Movies/Movies";




// Styled Component untuk Detail Movie
const StyledDetailMovie = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  .poster img {
    border-radius: 8px;
    width: 300px;
  }

  .info {
    max-width: 600px;
  }
`;

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null); // Detail film
  const [movies, setMovies] = useState([]); // Rekomendasi film

  useEffect(() => {
    async function getDetailMovie() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

        const response = await axios.get(URL);
        setMovie(response.data);
      } catch (error) {
        console.error("Gagal mengambil detail film:", error);
      }
    }

    async function getRecommendationMovies() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios.get(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Gagal mengambil rekomendasi:", error);
      }
    }

    getDetailMovie();
    getRecommendationMovies();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const genres = movie.genres?.map((genre) => genre.name).join(", ") || "";
  const trailer = movie.videos?.results?.[0]
    ? `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
    : "#";

  return (
    <>
      <StyledDetailMovie>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <a href={trailer} target="_blank" rel="noopener noreferrer">
            <Button>Watch Trailer</Button>
          </a>
        </div>
      </StyledDetailMovie>

      {/* Tampilkan film rekomendasi */}
      <h2 style={{ marginTop: "3rem" }}>Recommended Movies</h2>
      <Movies movies={movies} />
    </>
  );
}

export default Detail;
