import "./MovieList.scss";

import React from "react";

import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchTerm, filterValue }) => {
  let filteredMovies = movies.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.rate <= filterValue
  );
  return (
    <div className="row movie--list--wrapper">
      {filteredMovies.map((movieItem, index) => (
        <MovieCard key={index} movie={movieItem} />
      ))}
    </div>
  );
};

export default MovieList;
