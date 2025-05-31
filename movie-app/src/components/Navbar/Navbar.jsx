import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: #f6a926;
  padding: 1rem;
  color: #fff;
`;

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBrand = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;

    &:hover {
      color: #4361ee; /* Warna biru saat hover */
    }
  }

  @media (max-width: 767px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <StyledNavbar>
        <div>
          <NavBrand>Movie App</NavBrand>
        </div>
        <div>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movie/create">Add Movie</Link>
            </NavItem>
            <NavItem>
              <Link to="/movie/popular">Popular</Link>
            </NavItem>
            <NavItem>
              <Link to="/movie/now">Now Playing</Link>
            </NavItem>
            <NavItem>
              <Link to="/movie/top">Top Rated</Link>
            </NavItem>
          </NavList>
        </div>
      </StyledNavbar>
    </NavContainer>
  );
}

export default Navbar;
