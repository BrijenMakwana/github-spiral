import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [userSearch, setUserSearch] = useState("");

  const getGitHubData = () => {
    axios
      .get(`https://api.github.com/users/${userSearch}/repos`)
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

  const getUser = () => {
    axios
      .get(`https://api.github.com/users/${userSearch}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const submitUserName = () => {
    getUser();
    getGitHubData();
  };

  return (
    <div className="App">
      <SearchBar
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        submitUserName={submitUserName}
      />
      {user && userSearch && (
        <>
          <div className="github-user-container">
            <img
              src={user.avatar_url}
              alt="user pic"
              className="user-profile-image"
            />
            <h1 className="user-name">{user.name}</h1>
            <h2 className="user-git-handle">@{user.login}</h2>
            <p className="user-bio">{user.bio}</p>
            <div className="total-repos-container">
              <span className="total-repos-text">
                {user.public_repos} repos
              </span>
            </div>
          </div>
          <div className="repo-cards">
            {repos &&
              repos.map((item, index) => (
                <RepoCard
                  repoName={item.name}
                  repoDescription={item.description}
                  repoCreatedDate={item.created_at}
                  repoLastUpdatedDate={item.pushed_at}
                  html_url={item.html_url}
                  topics={item.topics}
                  key={index}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
