import React from "react";
import MovieLogin from "./MovieLogin";
import MovieLogout from "./MovieLogout";
import MovieUserProfile from "./MovieUserProfile";

const MovieNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute start-50">
      <ul className="navbar-nav gap-5">
        <li className="navitem fs-5 border-bottom">
          Action
        </li>
        <li className="navitem fs-5 border-bottom">
          Drama
        </li>
        <li className="navitem fs-5 border-bottom">
          Comedy
        </li>
        <li className="fs-5 border-bottom">
          <MovieUserProfile />
        </li>
        <li className="navitem">
          <MovieLogin />
        </li>
        <li className="navitem">
          <MovieLogout />
        </li>
      </ul>
    </nav>
  );
};

export default MovieNavbar;
