import React from "react";
import "./RepoCard.css";
import moment from "moment";

const RepoCard = (props) => {
  return (
    <div className="card-container">
      <h2 className="repo-name">devlink</h2>
      <p className="repo-description">
        Each developer has a variety of links they would like to share with
        potential employers, colleagues, friends, and other people. You can
        share all of your links at once in one location using Devlink.
      </p>
      <span className="date-created">
        {moment("2022-10-14T06:05:56Z").format("ll")}
      </span>
    </div>
  );
};

export default RepoCard;
