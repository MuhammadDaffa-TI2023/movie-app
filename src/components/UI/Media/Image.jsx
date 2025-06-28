import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "@/components/UI/Button";


// Styled Component
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

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;

      const response = await axios(URL);
      setMovie(response.data);
    }

    getDetailMovie();
  }, [id]);

  const genres = movie?.genres?.map((genre) => genre.name).join(", ") || "";
  const trailer = movie?.videos?.results?.[0]
    ? `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
    : "#";

  return (
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
  );
}

export default DetailMovie;
