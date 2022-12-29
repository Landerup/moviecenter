import React from "react";

// Väljer vad jag vill hämta från film data, renderar film data här
const MovieCard = ({ movie, img_url, favouriteComponent }) => {
  return (
    // kollar om filmen har en poster isåfall ska den visas annars inte
    <div className="image-container col col-3 m-4">
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
