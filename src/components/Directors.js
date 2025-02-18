import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div index={index}>
          <h3>{director.name}</h3>
          <h4>Movies: </h4>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>
                {movie}
              </li>
            ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
