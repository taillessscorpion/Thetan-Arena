import React, { useState } from "react";
import Volume from "./Volume";
import "./index.css";

const Video = (props) => {
  const [volume, setVolume] = useState(false);
  const toggleVolume = () => {
    setVolume(!volume);
  };
  return (
    <div className="Page Video" style={props.style ? props.style : {}}>
      <Volume value={volume} toggleHandler={toggleVolume} />
      <video className="Video-Playback" playsInline autoPlay muted={!volume} loop>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
