import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MovieLogin from "./MovieLogin";
import MovieLogout from "./MovieLogout";
import MovieUserProfile from "./MovieUserProfile";
import { Link } from "react-router-dom";

// if-sats för att kolla om man är inloggad eller inte, för att visa login eller logout knapp
const MovieNavbar = () => {
  // navItems i array för att enklare lägga till nya, gör en map och hämtar ut de
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-xl position-absolute start-50 m-4">
      <ul className="navbar-nav gap-5">
        <li className="navitem fs-5">
          <Link to="/new" className="text-decoration-none text-white">
            New Movies
          </Link>
        </li>
        <li className="navitem fs-5">
          <Link to="/popular" className="text-decoration-none text-white">
            Popular Movies
          </Link>
        </li>
        <li className="fs-5">
          <Link to="/profile" className="text-decoration-none text-white">
            {" "}
            <MovieUserProfile />{" "}
          </Link>
        </li>
        {isAuthenticated ? <MovieLogout /> : <MovieLogin />}
      </ul>
    </nav>
  );
};

export default MovieNavbar;
