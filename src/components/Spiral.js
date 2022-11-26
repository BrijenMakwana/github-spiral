import React from "react";
import "./Spiral.css";

export default function Spiral(props) {
  return (
    <div
      className="spiral-container"
      style={{
        width: props.size,
        height: props.size,
        borderColor: props.spiralColor,
      }}
    ></div>
    // <fieldset
    //   className="spiral-container"
    //   style={{
    //     width: props.size,
    //     height: props.size,
    //     borderColor: props.spiralColor,
    //   }}
    // >
    //   <legend>Foodora</legend>
    // </fieldset>
  );
}
