import React from "react";
import { useParams } from "react-router-dom";
const MoviePage = ({ movies }) => {
  let { movieId } = useParams();
  const movie = movies.find((e) => movieId == e.id);
  console.log(movie.title);
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${movie.posterUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "70% 70%",
      }}
    >
      <h1 style={{ paddingTop: "20vh", color: "black" }}>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviePage;
