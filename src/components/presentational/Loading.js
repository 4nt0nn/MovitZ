import React from "react";

/**
 * Functional component for rendering
 * a loading screen with dynamic loading text.
 *
 * @param {object} props - containing the loading text.
 */
const Loading = (props) => {
  return (
    <div className={"loading-screen valign-wrapper"}>
      <h5 className={"white-text"}>{props.text}</h5>
      <div className={"progress container"}>
        <div className={"indeterminate"}></div>
      </div>
    </div>
  );
};

export default Loading;
