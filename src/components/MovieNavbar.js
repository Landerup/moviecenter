import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MovieLogin from "./MovieLogin";
import MovieLogout from "./MovieLogout";
import MovieUserProfile from "./MovieUserProfile";

// if-sats för att kolla om man är inloggad eller inte, för att visa login eller logout knapp
const MovieNavbar = () => {
  // navItems i array för att enklare lägga till nya, gör en map och hämtar ut de
  const { isAuthenticated } = useAuth0();
  const navItems = ["Action", "Drama", "Comedy"];

  return (
    <nav className="navbar navbar-expand-xl position-absolute start-50">
      <ul className="navbar-nav gap-5">
        { navItems.map((item) => {
          return(
            <li className="navitem fs-5"><a href={item} name={item}>{item}</a></li>
          )
          })
        }
        <li to="/profile" className="fs-5">
          <MovieUserProfile />
        </li>
        {isAuthenticated ? <MovieLogout /> : <MovieLogin />}
      </ul>
    </nav>
  );
};

export default MovieNavbar;
