import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";
import MoviePage from "./Components/MoviePage/MoviePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
