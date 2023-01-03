import React from "react";

// Väljer vad jag vill hämta från film data, renderar film data här
const MovieCard = ({ movie, img_url, favouriteComponent }) => {
  return (
    // kollar om filmen har en poster isåfall ska den visas annars inte
    // hämtar in favouriteComponent för att lägga på filmkortet
    <div className="image-container col col-3 m-4 w-auto">
      {movie.poster_path ? (
        <img src={`${img_url}${movie.poster_path}`} alt="movie" />
      ) : null}
      <div className="overlay d-flex align-items-center justify-content-center">
        {favouriteComponent}
      </div>
    </div>
  );
};

export default MovieCard;
