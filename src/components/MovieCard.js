import React from "react";

// Väljer vad jag vill hämta från film datan
const MovieCard = ({ movie, img_url }) => {
  return (
      <div>
        <div>
          <h5>{movie.title}</h5>
          <img src={`${img_url}${movie.poster_path}`} alt="movie" />
        </div>
      </div>
  );
};

export default MovieCard;
