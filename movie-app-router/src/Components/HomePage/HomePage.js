import React, { useState } from "react";
import "./HomePage.scss";
import Filter from "./Filter/Filter";
import Content from "./Content/Content";
const HomePage = ({ movies, addItem }) => {
  const [searchTerm, setSearechTerm] = useState("");
  const [filterValue, setFilterValue] = useState(10);
  const [inputValueDisplay, setInputValueDisplay] = useState(10);

  const rateFilter = (rateValue) => {
    setFilterValue(rateValue);
    setInputValueDisplay(rateValue);
  };
  const searchMovie = (search) => {
    setSearechTerm(search);
  };
  console.log(movies);
  return (
    <div className="homePage--wrapper">
      <Filter
        addItem={addItem}
        searchMovie={searchMovie}
        rateFilter={rateFilter}
        inputValueDisplay={inputValueDisplay}
      />

      <Content
        movies={movies}
        searchTerm={searchTerm}
        filterValue={filterValue}
      />
    </div>
  );
};

export default HomePage;
