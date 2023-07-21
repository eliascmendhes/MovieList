import React, { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await response.json();
      setResults(data.results);
    }
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((result) => (
            <li key={result.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                alt={result.title}
              />
              <h3>{result.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
