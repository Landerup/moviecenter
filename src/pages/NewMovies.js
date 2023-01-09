import React from "react";
import TitleComponent from "../components/TitleComponent";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

const NewMovies = ({ newMovie, movies, img_url }) => {
  useEffect(() => {
    newMovie();
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
