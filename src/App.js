import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);

  // Lägger till api url samt api key i en fetch med axios
  const fetchMovieApi = async () => {
    const {apiData: results} = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })

  setMovies(results)
  };

  // Kallar på fetch funktionen
  useEffect(() => {
    fetchMovieApi();
  },[]);

  // Funktion för att hämta data från MovieCard komponenten, vad jag vill lista ut
  const listMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))
  )

  // Listar filmer på hemsidan med listMovies funktionen
  return (
    <div className="App">
      <h1>Hej bror!</h1>
      <div className='container'>
        {listMovies()}
      </div>
    </div>
  );
}

export default App;
