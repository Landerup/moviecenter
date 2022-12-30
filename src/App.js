import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieHeader from "./components/MovieHeader";
import MovieFavourite from "./components/MovieFavourite";
import TrendingMovie from "./components/TrendingMovie";

function App() {
  // lägger api urls i variablar
  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [trendMovies, settrendMovies] = useState([]);
  const [search, setSearch] = useState("");
  const favouriteMovie = MovieFavourite();

  // Lägger till api url samt api key i en fetch
  const fetchMovieApi = async () => {
    const apiData = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
    const apiDataJson = await apiData.json();

    setMovies(apiDataJson.results);
  };

  // Ny fetch, samma som ovan men ny url med weekly trending movies
  const trendMovieApi = async () => {
    const apiTrendData = await fetch(
      `${API_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    const apiTrendDataJson = await apiTrendData.json();

    settrendMovies(apiTrendDataJson.results);
  };

  // kallar på fetch funktionen, kallas bara när sidan laddas om, api hämtas vid ny sökning
  useEffect(() => {
    fetchMovieApi(search);
    trendMovieApi(search);
  }, [search]);

  // Funktion för att hämta data från MovieCard komponenten, listar ut data som har med movieCard att göra
  const listMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        img_url={IMG_URL}
        favouriteComponent={favouriteMovie}
      />
    ));

  // samma som ovan men med ny komponent och ny api url med weekly trending movies
  const trendingMovies = () =>
    trendMovies.map((trendMovie) => (
      <TrendingMovie
        key={trendMovie.id}
        trendMovie={trendMovie}
        img_url={IMG_URL}
        favouriteComponent={favouriteMovie}
      />
    ));

  // lägger in sök url och fetchar den
  const searchMovie = async (event) => {
    event.preventDefault();
    try {
      const search_url = `${API_SEARCH}?api_key=${API_KEY}&query=${search}`;
      const searchData = await fetch(search_url);
      const searchDataJson = await searchData.json();

      setMovies(searchDataJson.results);
    } catch (event) {}
  };

  const seachHandler = (event) => {
    setSearch(event.target.value);
  };

  // Listar filmer på hemsidan med listMovies funktionen och söker med searchMovie och hanterar seachHandler
  return (
    <div className="container-fluid">
      <header className="header">
        <div className="text-center m-4">
          <MovieHeader header="Movie Center" />
        </div>
      </header>
      <form className="col-sm-4 mt-4" onSubmit={searchMovie}>
        <input
          className="form-control form-control-sm searchBar"
          type="search"
          placeholder="Search here..."
          value={search}
          onChange={seachHandler}
        />
      </form>
      <div>
        <div className="text-center m-4">
          <h3>New Movies</h3>
        </div>
        <div className="row d-flex justify-content-center">
          {listMovies()}
        </div>
      </div>
      <div>
        <div className="text-center m-4">
          <h3>Trending Movies</h3>
        </div>
        <div className="trend-movie">
          <div className="row">{trendingMovies()}</div>
        </div>
      </div>
      <footer className="footer">
        <div className="text-center m-4">
          <MovieHeader header="Movie Center" />
        </div>
      </footer>
    </div>
  );
}

export default App;
