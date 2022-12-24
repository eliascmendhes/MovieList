import React, { useState } from "react";
import FilmList from "./FilmList";
import FilmDetails from "./FilmDetails";
import Search from "./Search";
import "./styles/App.css";

function App() {
  const [selectedFilm, setselectedFilm] = useState(null);

  return (
    <div className="App">
      <Search />
      <FilmList onFilmSelected={setselectedFilm} />
      {selectedFilm && <FilmDetails film={selectedFilm} />}
    </div>
  );
}

export default App;
