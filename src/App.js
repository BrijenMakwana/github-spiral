import { useState } from "react";
import "./App.css";
import axios from "axios";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [userSearch, setUserSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const getGitHubData = () => {
    axios
      .get(`https://api.github.com/users/${userSearch}/repos`)
      .then(function (response) {
        // handle success

        setRepos(response.data);
      })
      .catch(function (error) {
        // handle error
        alert("Something went wrong!! Please try again later");
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
        alert("Something went wrong!! Please try again later");
      })
      .then(function () {
        // always executed
      });
  };

  const submitUserName = () => {
    getUser();
    getGitHubData();
    setIsSearched(true);
  };

  return (
    <div className="App">
      {/* searchbar */}
      <SearchBar
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        submitUserName={submitUserName}
      />
      {isSearched && (
        <>
          {/* user info */}
          <div className="github-user-container">
            <a href={user.html_url} target="blank">
              <img
                src={user.avatar_url}
                alt={user.name}
                className="user-profile-image"
              />
            </a>

            <h1 className="user-name">{user.name}</h1>
            <a href={user.html_url} target="blank" className="user-url">
              <h2 className="user-git-handle">@{user.login}</h2>
            </a>

            {user.bio && <p className="user-bio">{user.bio}</p>}
            <div className="total-repos-container">
              <span className="total-repos-text">
                {user.public_repos} public repos
              </span>
            </div>
          </div>

          {/* repos */}
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
