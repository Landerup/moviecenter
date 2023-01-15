import TitleComponent from "../components/TitleComponent";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

// filmer som listas ut på homepagen
const Home = ({ movies, img_url, fetchMovieApi }) => {
  useEffect(() => {
    fetchMovieApi();
    // eslint-disable-next-line
  }, []);

  const listMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} img_url={img_url} />
    ));

  return (
    <>
      <div className="text-center m-4">
        <TitleComponent title="Discover Movies" />
      </div>
      <div className="row d-flex justify-content-center">{listMovies()}</div>
    </>
  );
};

export default Home;
