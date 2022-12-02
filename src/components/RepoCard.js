import React from "react";
import "./RepoCard.css";
import moment from "moment";
import Topic from "./Topic";

const RepoCard = (props) => {
  const {
    repoName,
    repoDescription,
    repoCreatedDate,
    repoLastUpdatedDate,
    html_url,
    topics,
  } = props;
  return (
    <a href={html_url} target="blank" className="repo-url">
      <div className="card-container">
        {/* total days spent */}

        <div className="days-spent-container">
          <span className="days-spent-text">
            {Math.abs(
              moment(repoLastUpdatedDate).diff(moment(repoCreatedDate), "days")
            ) + 1}{" "}
            days
          </span>
        </div>
        {/* repo name */}
        <h2 className="repo-name">{repoName}</h2>
        {/* repo description */}
        <p className="repo-description">{repoDescription && repoDescription}</p>
        {/* repo created date */}
        <span className="date-created">
          {moment(repoCreatedDate).format("ll")}
        </span>

        {/* TODO: show topics in tags format */}
        <div className="topics-container">
          {topics &&
            topics.map((item, index) => (
              <Topic topicTitle={item} key={index} />
            ))}
        </div>
      </div>
    </a>
  );
};

export default RepoCard;
