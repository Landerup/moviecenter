import React from "react";

// Väljer vad jag vill hämta från film data, renderar film data här
const TrendingMovie = ({ trendMovie, img_url, favouriteComponent }) => {
  return (
    // kollar om filmen har en poster isåfall ska den visas annars inte
    //hämtar in favouriteComponent för att lägga på filmkortet
    <div className="image-container d-flex justify-content-start m-2 mb-4">
      {trendMovie.poster_path ? (
        <img src={`${img_url}${trendMovie.poster_path}`} alt="movie" />
      ) : null}
      <div className="overlay d-flex align-items-center justify-content-center">
        {favouriteComponent}
      </div>
    </div>
  );
};

export default TrendingMovie;