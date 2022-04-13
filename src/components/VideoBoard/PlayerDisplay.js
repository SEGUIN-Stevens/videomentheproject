import React, { useEffect, useRef, useState } from "react";
import "./PlayerDisplay.css";
const PlayerDisplay = props => {
  const videoRef = useRef();
  const [play, setPlay] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoControl = () => {
    setPlay(!play);
    if (play === true) {
      videoRef.current.play();
      setVideoTime(videoRef.current.duration);
    } else {
      videoRef.current.pause();
    }
  };
  useEffect(() => {
    videoRef.current?.load();
  }, [props.select]);
  window.setInterval(function() {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);
  return (
    <div className="container">
      <div className="row">
        <video width="750" height="500" ref={videoRef} id="video">
          <source src={props.select} type="video/mp4" />
        </video>
      </div>
      <div className="row-button">
        <button
          className="player__button toggle"
          title="Toggle Play"
          onClick={videoControl}
        >
          {play ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play"
              viewBox="0 0 16 16"
            >
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          )}
        </button>
      </div>
      <div className="row">
        <div className="progress">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default PlayerDisplay;
