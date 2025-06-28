import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "@/components/UI/Button";
import Movies from "../components/Movies/Movies"; // Pastikan path-nya benar
import ENDPOINTS from "../utils/constants/endpoint"; // ✅ Tambahan

const StyledDetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }
`;

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]); // rekomendasi film

  // ✅ Fetch detail movie
  useEffect(() => {
    async function getDetailMovie() {
      const response = await axios.get(ENDPOINTS.detail(id)); // ✅ pakai endpoint
      setMovie(response.data);
    }

    getDetailMovie();
  }, [id]);

  // ✅ Fetch recommended movies
  useEffect(() => {
    async function getRecommendationMovies() {
      const response = await axios.get(ENDPOINTS.recommendations(id)); // ✅ pakai endpoint
      setMovies(response.data.results);
    }

    getRecommendationMovies();
  }, [id]);

  // ✅ Fetch movie popular (dari gambar)
  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await axios.get(ENDPOINTS.POPULAR); // ✅ pakai endpoint dari gambar
      console.log("Popular Movies:", response.data.results); // kamu bisa set state kalau mau
    }

    fetchPopularMovies();
  }, []);

  const genres = movie?.genres?.map((genre) => genre.name).join(", ");
  const trailer = movie?.videos?.results?.[0]?.key
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
          <Button as="a" href={trailer} target="_blank" rel="noopener noreferrer">
            Watch Trailer
          </Button>
        </div>
      </StyledDetailMovie>

      {/* Rekomendasi Film */}
      <Movies movies={movies} setMovies={setMovies} />
    </>
  );
}

export default DetailMovie;
