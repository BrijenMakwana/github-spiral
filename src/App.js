import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import RepoCard from "./components/RepoCard";

function App() {
  const getGitHubData = () => {
    axios
      .get("https://api.github.com/users/brijenmakwana/repos")
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <RepoCard />
    </div>
  );
}

export default App;
