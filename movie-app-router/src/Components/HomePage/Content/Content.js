import React from "react";

import MovieList from "../MovieList/MovieList";
import "./Content.scss";

const Content = ({ movies, searchTerm, filterValue }) => {
  return (
    <div className="App-content">
      <div className="container">
        <MovieList
          movies={movies}
          searchTerm={searchTerm}
          filterValue={filterValue}
        ></MovieList>
      </div>
    </div>
  );
};

export default Content;
