import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map(director =>
    <div key={director.name}>
      <p>{director.name}</p>

      <div>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>

    </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      <>{directorList}</>

    </div>
  )
}

export default Directors;
