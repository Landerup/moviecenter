import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieHeader from "./components/MovieHeader";

function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie"
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  // Lägger till api url samt api key i en fetch
  const fetchMovieApi = async () => {
    const apiData = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
    const apiDataJson = await apiData.json();

    setMovies(apiDataJson.results);
  };

  // Kallar på fetch funktionen, kallas bara när sidan laddas, sidan laddas om vid ny sökning
  useEffect(() => {
    fetchMovieApi();
  }, []);

  // Funktion för att hämta data från MovieCard komponenten, vad jag vill lista ut
  const listMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} img_url={IMG_URL} />
    ));

  // lägger in sök url och fetchar den
  const searchMovie = async(event) => {
    event.preventDefault();
    console.log("searching")
    try{
      const search_url = `${API_SEARCH}?api_key=${API_KEY}&query=${search}`;
      const searchData = await fetch(search_url);
      const searchDataJson = await searchData.json();

      setMovies(searchDataJson.results);
    }
    catch(event){

    }
  }

  const seachHandler= (event)=> {
    setSearch(event.target.value);
  }

  // Listar filmer på hemsidan med listMovies funktionen
  return (
    <div className="container-fluid">
      <header className="header">
        <div className="m-4">
          <MovieHeader header="Movie Center" />
        </div>
      </header>
      <main>
        <div className="m-4">
          <form className="col-sm-4" onSubmit={searchMovie}>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search here..."
              name="query"
              value={search}
              onChange={seachHandler}
            />
            <button type="submit" className="btn btn-outline-light btn-sm">
              Search
            </button>
          </form>
        </div>
        <div className="text-center m-4">
          <h3>New Movies</h3>
        </div>
        <div className="row justify-content-center">{listMovies()}</div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
