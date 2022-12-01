import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const { userSearch, setUserSearch, submitUserName } = props;

  return (
    <div className="searchbar-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitUserName();
        }}
      >
        <input
          type="text"
          placeholder="GitHub username"
          className="input"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </form>

      <img
        src={require("../assets/images/search.png")}
        alt="search"
        className="searchbar-image search-btn"
        onClick={submitUserName}
      />
    </div>
  );
}
