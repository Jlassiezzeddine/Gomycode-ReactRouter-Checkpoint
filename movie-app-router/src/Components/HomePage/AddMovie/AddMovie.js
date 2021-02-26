import "./AddMovie.scss";

import React, { useState } from "react";

const AddMovie = ({ displayAddMovie, addItem }) => {
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    addItem({ title, posterUrl, description, rate });
    displayAddMovie();
    e.preventDefault();
  };
  return (
    <div className="add--movie--wrapper">
      <div className="add--movie--card">
        <div className="add--movie--card--top">
          <h2 className="add--movie--card--title">Add Movie</h2>
          <div className="add--movie--card--close" onClick={displayAddMovie}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form--input">
            <label htmlFor="title">Title :</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form--input">
            <label htmlFor="posterUrl">Poster Url :</label>
            <input
              type="text"
              name="posterUrl"
              id="posterUrl"
              onChange={(e) => setPosterUrl(e.target.value)}
            />
          </div>
          <div className="form--input">
            <label htmlFor="description">Description :</label>
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form--input">
            <label htmlFor="rate">Rate :</label>

            <input
              type="text"
              name="rate"
              id="rate"
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <input type="submit" value="Add Movie" />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
