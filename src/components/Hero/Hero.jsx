import { useEffect, useState } from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const HeroTitle = styled.h2`
  color: #000000;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const HeroGenre = styled.h3`
  color: #000000;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const HeroDescription = styled.p`
  color: #010101;
  margin-bottom: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #3a56d4;
  }
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

function Hero() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();

    return () => {
      // Cleanup
    };
  }, []);

  if (loading) {
    return <HeroContainer>Loading...</HeroContainer>;
  }

  if (error) {
    return <HeroContainer>Error: {error}</HeroContainer>;
  }

  return (
    <HeroContainer>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie?.Title || 'Spiderman'}</HeroTitle>
          <HeroGenre>
            Genre: {movie?.Genre || 'Thriller, Drama, Romance'}
          </HeroGenre>
          <HeroDescription>
            {movie?.Plot || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
          </HeroDescription>
          <HeroButton>Watch</HeroButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage
            src={movie?.Poster || 'https://picsum.photos/536/354'}
            alt={movie?.Title || 'Movie Poster'}
          />
        </HeroRight>
      </HeroSection>
    </HeroContainer>
  );
}

export default Hero;