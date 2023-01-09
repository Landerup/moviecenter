import TitleComponent from "../components/TitleComponent";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

// Listar ut filmer i Popular Movies, api data genom hooken som kommer från app.js
const PopularMovies = ({ popularMovie, movies, img_url }) => {
  useEffect(() => {
    popularMovie();
  }, []);

  const listPopularMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} img_url={img_url} />
    ));

  return (
    <>
      <div className="text-center m-4">
        <TitleComponent title="Popular Movies" />
      </div>
      <div className="row d-flex justify-content-center">{listPopularMovies()}</div>
    </>
  );
};

export default PopularMovies;
