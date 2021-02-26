import React, { useState } from "react";
import Filter from "./Filter/Filter";
import Content from "./Content/Content";
const HomePage = () => {
  let movies = [
    {
      title: "movie one title",
      description: "Movie One Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      rate: 5,
    },
    {
      title: "movie two title",
      description: "Movie two Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      rate: 7,
    },
    {
      title: "movie three title",
      description: "Movie two Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      rate: 5.8,
    },
  ];

  const [movieList, setMovieList] = useState(movies);
  const [searchTerm, setSearechTerm] = useState("");
  const [filterValue, setFilterValue] = useState(10);
  const [inputValueDisplay, setInputValueDisplay] = useState(10);
  const addItem = (newmovie) => {
    setMovieList([...movieList, newmovie]);
  };
  const rateFilter = (rateValue) => {
    setFilterValue(rateValue);
    setInputValueDisplay(rateValue);
  };
  const searchMovie = (search) => {
    setSearechTerm(search);
  };

  return (
    <div className="homePage--wrapper">
      <Filter
        addItem={addItem}
        searchMovie={searchMovie}
        rateFilter={rateFilter}
        inputValueDisplay={inputValueDisplay}
      />

      <Content
        movies={movieList}
        searchTerm={searchTerm}
        filterValue={filterValue}
      />
    </div>
  );
};

export default HomePage;
