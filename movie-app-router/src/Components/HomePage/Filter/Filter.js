import React, { useState } from "react";

import "./Filter.scss";

import AddMovie from "../AddMovie/AddMovie";

const Filter = ({ addItem, searchMovie, rateFilter, inputValueDisplay }) => {
  const [addMovieDisplay, setAddMovieDisplay] = useState(false);
  const displayAddMovie = () => {
    setAddMovieDisplay(!addMovieDisplay);
  };
  return (
    <div className="App-header">
      <div className="filter--wrapper">
        <div className="search--field">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search movie by title"
            onChange={(e) => searchMovie(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>

        {addMovieDisplay && (
          <AddMovie displayAddMovie={displayAddMovie} addItem={addItem} />
        )}
        <div className="rate--wrapper">
          <div className="rate--value">
            Filter by Rate : {inputValueDisplay}
          </div>
          <input
            type="range"
            name="rate"
            min="0"
            max="10"
            id="rate"
            defaultValue="10"
            onChange={(e) => rateFilter(e.target.value)}
          />
        </div>
        <div className="nav--buttons">
          <button
            className="add--movie--button"
            onClick={() => setAddMovieDisplay(!addMovieDisplay)}
          >
            <i className="fas fa-plus"></i>Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
