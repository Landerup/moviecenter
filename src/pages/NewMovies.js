import TitleComponent from "../components/TitleComponent";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

// listar ut filmer i fliken New Movies, api data genom hooken som kommer från app.js
const NewMovies = ({ newMovie, movies, img_url }) => {
  useEffect(() => {
    newMovie();
    // eslint-disable-next-line
  }, []);

  const listNewMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} img_url={img_url} />
    ));

  return (
    <>
      <div className="text-center m-4">
        <TitleComponent title="New Movies" />
      </div>
      <div className="row d-flex justify-content-center">{listNewMovies()}</div>
    </>
  );
};

export default NewMovies;
