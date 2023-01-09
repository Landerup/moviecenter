
// Väljer vad jag vill hämta från film data, renderar film data här
const MovieCard = ({ movie, img_url }) => {
  return (
    // kollar om filmen har en poster isåfall ska den visas annars inte
    // hämtar info text om filmer, om det inte finns hämtas rating på kortet
    <div className="image-container col col-3 m-4 w-auto">
      {movie.poster_path ? (
        <img src={`${img_url}${movie.poster_path}`} alt="movie" />
      ) : null}
      <div className="overlay d-flex align-items-center justify-content-center">
        <p className="overlay-text">{movie.overview ? movie.overview :  movie.vote_count}</p>
      </div>
    </div>
  );
};

export default MovieCard;
