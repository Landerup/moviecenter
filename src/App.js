import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TitleComponent from "./components/TitleComponent";
import MovieFooter from "./components/MovieFooter";
import MovieNavbar from "./components/MovieNavbar";
import { Routes, Route, Link } from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import NewMovies from "./pages/NewMovies";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  // lägger api urls i variablar för att enklare kunna använda de
  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Lägger till api url samt api key i en fetch
  const fetchMovieApi = async () => {
    const apiData = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
    const apiDataJson = await apiData.json();

    setMovies(apiDataJson.results);
  };

  // fetch för popular movies
  const popularMovie = async () => {
    const popular_url = `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc`;
    const popularData = await fetch(popular_url);
    const popularDataJson = await popularData.json();

    setMovies(popularDataJson.results);
  }

  // fetch för new movies
  const newMovie = async () => {
    const new_url = `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc`;
    const newData = await fetch(new_url);
    const newDataJson = await newData.json();

    setMovies(newDataJson.results);
  }

  // Fetchar sök url
  // if-sats för att inte hämta apiet varje gång man skriver en bokstav o sökrutan
  // När sökrutan är tom går den tillbaka till default
  const searchMovie = async (event) => {
    event.preventDefault();
    if(!search){
      fetchMovieApi()
    }else{
    try {
      const search_url = `${API_SEARCH}?api_key=${API_KEY}&query=${search}`;
      const searchData = await fetch(search_url);
      const searchDataJson = await searchData.json();

      setMovies(searchDataJson.results);
    } catch (event) {}
  }};

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  // Listar filmer på hemsidan med listMovies funktionen och söker med searchMovie och hanterar seachHandler
  // global titel komponent för att enkelt ändra titlar på sidan
  return (
    <div>
      <header className="header">
        <div className="m-4">
          <Link to="/" className="text-decoration-none text-white"> <TitleComponent title="Movie Center" /> </Link>
        </div>
        <MovieNavbar />
      </header>
      <div className="container-fluid">
        <form className="col-sm-4 mt-4 mx-auto" onSubmit={searchMovie}>
          <input
            className="form-control form-control-sm searchBar"
            type="search"
            placeholder="Search movie here..."
            value={search}
            onChange={searchHandler}
          />
        </form>
        <div>
          <Routes>
            <Route path="/" element={<Home fetchMovieApi={fetchMovieApi} img_url={IMG_URL} movies={movies}/> }></Route>
            <Route path="/popular" element={< PopularMovies popularMovie={popularMovie} img_url={IMG_URL} movies={movies}/>}></Route>
            <Route path="/new" element={<NewMovies newMovie={newMovie} img_url={IMG_URL} movies={movies}/>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
      <footer className="footer float-bottom">
        <div className="m-4">
          <MovieFooter />
        </div>
      </footer>
    </div>
  );
}

export default App;
