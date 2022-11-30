import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <img
        src={require("../assets/images/github.png")}
        alt="github"
        className="searchbar-image"
      />
      <input type="text" placeholder="GitHub username" className="input" />
      <img
        src={require("../assets/images/search.png")}
        alt="search"
        className="searchbar-image"
      />
    </div>
  );
}
