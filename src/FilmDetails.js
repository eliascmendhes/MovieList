import React from "react";
import { useParams } from "react-router-dom";
import "./styles/FilmDetails.css";
function FilmDetails(props) {
  const { fillms } = props;
  const { id } = useParams();
  const fillm = fillms.find((p) => p.id === parseInt(id));

  return (
    <div>
      <img src={fillm.imageUrl} alt={fillm.name} />
      <h1>{fillm.name}</h1>
      <p>Type: {fillm.type}</p>
      <h2>Abilities:</h2>
      <ul>
        {fillm.abilities.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmDetails;
