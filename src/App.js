import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieHeader from "./components/MovieHeader";
import MovieFavourite from "./components/MovieFavourite";

function App() {
  // lägger api urls i variablar
  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  // hämtar från MovieFavourites componenten och lägger på <MovieCard/> för att den ska hamna på kortet
  const favouriteMovie = MovieFavourite();

  // Lägger till api url samt api key i en fetch
  const fetchMovieApi = async () => {
    const apiData = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
    const apiDataJson = await apiData.json();

    setMovies(apiDataJson.results);
  };

  // Kallar på fetch funktionen, kallas bara när sidan laddas, sidan laddas om vid ny sökning
  useEffect(() => {
    fetchMovieApi(search);
  }, [search]);

  // Funktion för att hämta data från MovieCard komponenten, listar ut data som har med movieCard att göra
  const listMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} img_url={IMG_URL} favouriteComponent={favouriteMovie}/>
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

  // Listar filmer på hemsidan med listMovies funktionen och söker med searchMovie och seachHandler
  return (
    <div className="container-fluid">
      <header className="header">
        <div className="m-4">
          <MovieHeader header="Movie Center" />
        </div>
      </header>
      <form
        className="col-sm-4 m-4 justify-content-center"
        onSubmit={searchMovie}
      >
        <input
          className="form-control form-control-sm searchBar"
          type="search"
          placeholder="Search here..."
          value={search}
          onChange={seachHandler}
        />
      </form>
      <div className="text-center m-4">
        <h3>New Movies</h3>
      </div>
      <div className="row d-flex align-items-center justify-content-center">{listMovies()}</div>
    </div>
  );
}

export default App;
