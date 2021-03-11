import React from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.scss";
const MoviePage = ({ movies }) => {
  let { movieId } = useParams();
  const movie = movies.find((e) => movieId == e.id);
  console.log(movie.title);
  return (
    <div
      className="movie-wrapper"
      style={{
        backgroundImage: `url(${movie.posterUrl})`,
        backgroundPosition: "100% 60%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-lg-5">
            <div className="movie-content">
              <h1 className="movie-title">{movie.title}</h1>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="movie-trailer">
              <iframe
                title="trailer"
                width="500"
                height="350"
                src={movie.trailer}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
