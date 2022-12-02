import React from "react";
import "./Topic.css";

export default function Topic(props) {
  const { topicTitle } = props;
  return (
    <div className="topic-container">
      <span className="topic-title">{topicTitle}</span>
    </div>
  );
}
