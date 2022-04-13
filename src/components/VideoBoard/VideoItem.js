import React from "react";

const VideoItem = props => {
  const getVideoName = event => {
    props.onSaveItemName(event.target.outerText);
  };
  return (
    <div className="card text-white bg-secondary mb3" onClick={getVideoName}>
      <div className="card-header">{props.title}</div>
    </div>
  );
};
export default VideoItem;
 