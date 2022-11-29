import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import RepoCard from "./components/RepoCard";

function App() {
  const [repos, setRepos] = useState([]);

  const getGitHubData = () => {
    axios
      .get("https://api.github.com/users/brijenmakwana/repos")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setRepos(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getGitHubData();
  }, []);

  return (
    <div className="App">
      <div className="repo-cards">
        {repos &&
          repos.map((item, index) => (
            <RepoCard
              repoName={item.name}
              repoDescription={item.description}
              repoCreatedDate={item.created_at}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
