import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MovieLogin from "./MovieLogin";
import MovieLogout from "./MovieLogout";
import MovieUserProfile from "./MovieUserProfile";

// if-sats för att kolla om man är inloggad eller inte, för att visa login eller logout knapp
const MovieNavbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-xl position-absolute start-50">
      <ul className="navbar-nav gap-5">
        <li to="/action" className="navitem fs-5">
          Action
        </li>
        <li to="/drama" className="navitem fs-5">
          Drama
        </li>
        <li to="/comedy" className="navitem fs-5">
          Comedy
        </li>
        <li to="/profile" className="fs-5">
          <MovieUserProfile />
        </li>
        {isAuthenticated ? <MovieLogout /> : <MovieLogin />}
      </ul>
    </nav>
  );
};

export default MovieNavbar;
