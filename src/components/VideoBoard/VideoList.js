import React from "react";
import VideoItem from "./VideoItem";
import "./Player.css";
const VideoList = props => {
  const saveItemName = selectedName => {
    props.onSaveVideoName(selectedName);
  };
  return (
    <ul className="list">
      {props.items.map(item => (
        <VideoItem
          key={item.title}
          title={item.title} 
          onSaveItemName={saveItemName}
        />
      ))}
    </ul>
  );
};
export default VideoList;
