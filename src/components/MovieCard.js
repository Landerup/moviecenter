import React from "react";

// Väljer vad jag vill hämta från film data, renderar film data här
const MovieCard = ({ movie, img_url }) => {
  return (
      <div className="m-2">
        <div>
          <img src={`${img_url}${movie.poster_path}`} alt="movie"/>
        </div>
      </div>
  );
};

export default MovieCard;
