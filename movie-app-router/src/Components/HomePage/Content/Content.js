import React from "react";

import MovieList from "../MovieList/MovieList";
import "./Content.scss";

const Content = ({ movies, searchTerm, filterValue, match }) => {
  return (
    <div className="App-content">
      <div className="container">
        <MovieList
          match={match}
          movies={movies}
          searchTerm={searchTerm}
          filterValue={filterValue}
        ></MovieList>
      </div>
    </div>
  );
};

export default Content;
