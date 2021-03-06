import "./MovieCard.scss";

import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, match }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 ">
      <Link to={`/movies/${movie.id}`}>
        <div className="movie--card--wrapper">
          <div className="movie--card--img">
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
          <div className="movie--card--content">
            <h2 className="movie--card--title">{movie.title}</h2>
            <p className="movie--card--description">{movie.description}</p>
            <div className="movie--card--rate">
              <i className="fas fa-star"></i>
              <span>{movie.rate}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
