import { useEffect, useState } from "react";
import "./styles/FilmList.css";

function FilmList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=66ce6f59fe7c4a88f26f5b9b43af1ca3&language=pt-br-US&page=1"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
