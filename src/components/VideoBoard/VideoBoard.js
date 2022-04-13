import React, { useState } from "react";
import "./VideoBoard.css";
import PlayerDisplay from "./PlayerDisplay";
import VideoList from "./VideoList";

const VideoBoard = props => {
  const baseURL = "http://localhost:3080/file/";
  const [selectVideo, setSelectVideo] = useState("nya_cat_1649890835782.mp4");
  const saveVideoName = selectedName => {
    setSelectVideo(selectedName);
  };
  const urlSource = baseURL + selectVideo;
  const videoItem = props.array.map(item => {
    return { title: item };
  });
  return (
    <div className="video">
      <PlayerDisplay select={urlSource} />
      <VideoList items={videoItem} onSaveVideoName={saveVideoName} />
    </div>
  );
};
export default VideoBoard;
