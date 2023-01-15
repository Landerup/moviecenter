import { useAuth0 } from "@auth0/auth0-react";
import MovieLogin from "./MovieLogin";
import MovieLogout from "./MovieLogout";
import MovieUserProfile from "./MovieUserProfile";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// if-sats för att kolla om man är inloggad eller inte, för att visa login eller logout knapp
// använder react-bootstrap för enklare responsivitet och burger-menu
const MovieNavbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar expand="md" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4 m-4">
              <Nav.Link className="text-white" href="/new">
                New Movies
              </Nav.Link>
              <Nav.Link className="text-white" href="/popular">
                Popular Movies
              </Nav.Link>
              <Nav.Link className="text-white" href="/profile">
                <MovieUserProfile />
              </Nav.Link>
              {isAuthenticated ? <MovieLogout /> : <MovieLogin />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MovieNavbar;
