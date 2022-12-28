import React from "react";

// Väljer vad jag vill hämta från film data, renderar film data här
const MovieCard = ({ movie, img_url }) => {
  return (
    // kollar om filmen har en poster isåfall ska den visas annars inte
      <div className="col col-3 m-2">
        <div>
        {movie.poster_path ? <img src={`${img_url}${movie.poster_path}`} alt="movie"/> : null}
        </div>
      </div>
  );
};

export default MovieCard;
