import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <div className="navigation--wrapper">
      <nav>
        <Link to="/" className="navigation--logo">
          <h2>Movies</h2>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
