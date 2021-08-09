import styled from "styled-components";
import { Link } from "react-scroll";

const Div1 = styled.div`
  display: block;
  background: #000;
`;

const Nav = styled.nav`
  max-width: 1140px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  margin: 0 auto;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  font-size: 20px;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <Div1>
      <Nav>
        <div>
          <Link to="home">
            <StyledLink>
              <img src="/Logo.svg"></img>
            </StyledLink>
          </Link>
        </div>
        <div>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <StyledLink>Home</StyledLink>
          </Link>
          <Link to="about" spy={true} smooth={true}>
            <StyledLink>About</StyledLink>
          </Link>
          <Link to="works" spy={true} smooth={true}>
            <StyledLink>Works</StyledLink>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <StyledLink>Contact</StyledLink>
          </Link>
        </div>
      </Nav>
    </Div1>
  );
};

export default Navbar;
