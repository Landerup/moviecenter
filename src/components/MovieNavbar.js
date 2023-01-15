import { useAuth0 } from "@auth0/auth0-react";
import MovieLogin from "./MovieLogin";
import MovieLogout from "./MovieLogout";
import MovieUserProfile from "./MovieUserProfile";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// if-sats för att kolla om man är inloggad eller inte, för att visa login eller logout knapp
// använder react-bootstrap för enklare responsivitet och burger-menu
const MovieNavbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar expand="lg" variant="dark" className="m-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-5 m-4">
              <Link className="text-white" to="/new">
                New Movies
              </Link>
              <Link className="text-white" to="/popular">
                Popular Movies
              </Link>
              <Link className="text-white" to="/profile">
                <MovieUserProfile />
              </Link>
              {isAuthenticated ? <MovieLogout /> : <MovieLogin />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MovieNavbar;
