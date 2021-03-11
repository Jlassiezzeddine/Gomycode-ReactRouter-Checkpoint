import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";
import MoviePage from "./Components/MoviePage/MoviePage";

function App() {
  let movies = [
    {
      id: 1,
      title: "movie one title",
      description: "Movie One Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      trailer: "https://www.youtube.com/embed/8Qn_spdM5Zg",
      rate: 5,
    },
    {
      id: 2,
      title: "movie two title",
      description: "Movie two Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      trailer: "https://www.youtube.com/embed/8Qn_spdM5Zg",
      rate: 7,
    },
    {
      id: 3,
      title: "movie three title",
      description: "Movie two Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      trailer: "https://www.youtube.com/embed/8Qn_spdM5Zg",
      rate: 5.8,
    },
  ];
  const [movieList, setMovieList] = useState(movies);
  const addItem = (newmovie) => {
    setMovieList([...movieList, newmovie]);
  };
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage movies={movieList} addItem={addItem} />}
        />
        <Route
          path={`/movies/:movieId`}
          render={() => <MoviePage movies={movieList} />}
        />
      </Switch>
    </div>
  );
}

export default App;
