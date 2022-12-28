import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300"
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const [movies, setMovies] = useState([]);

  // Lägger till api url samt api key i en fetch med axios
  const fetchMovieApi = async () => {
    const apiData = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`);
    const apiDataJson = await apiData.json();

    console.log(apiDataJson)

    setMovies(apiDataJson.results);

    console.log(movies)
  };

  // Kallar på fetch funktionen, kallas bara när sidan laddas
  useEffect(() => {
    fetchMovieApi();
  }, []);

  // Funktion för att hämta data från MovieCard komponenten, vad jag vill lista ut
  const listMovies = () => (
    movies.map((movie =>
      <MovieCard
      key = {movie.id}
      movie = {movie}
      img_url = {IMG_URL}
      />
      ))
  );

  // Listar filmer på hemsidan med listMovies funktionen
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
          <div  className="d-flex justify-content-start m-3">
            {listMovies()}
          </div>
      </div>
    </div>
  );
}

export default App;
