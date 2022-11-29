import React from "react";
import "./RepoCard.css";
import moment from "moment";

const RepoCard = (props) => {
  const { repoName, repoDescription, repoCreatedDate } = props;
  return (
    <div
      className="card-container"
      style={{
        backgroundColor:
          "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      }}
    >
      <h2 className="repo-name">{repoName}</h2>
      <p className="repo-description">
        {repoDescription ?? "no description available"}
      </p>
      <span className="date-created">
        {moment(repoCreatedDate).format("ll")}
      </span>
    </div>
  );
};

export default RepoCard;
