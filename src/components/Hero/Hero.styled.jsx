import styled from "styled-components";

export const Container = styled.div`
padding: 2rem;
background: linear-gradient(135deg, #fcd34d, #fde68a, #bef264);

color: #1e293b;
border: 3px solid red; /* <- tambahkan ini untuk tes */
`;


export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeroLeft = styled.div`
  flex: 1;
`;

export const HeroRight = styled.div`
  flex: 1;
`;

export const HeroTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #facc15;
`;

export const HeroGenre = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #94a3b8;
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const HeroButton = styled.button`
  background-color: #facc15;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #eab308;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const StyledHero = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  .hero__left {
    flex: 1;
  }

  img {
    flex: 1;
    border-radius: 0.75rem;
    width: 100%;
    object-fit: cover;
  }
`;

