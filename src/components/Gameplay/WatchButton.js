import React from "react";
import BulletButton from "../utilities/BulletButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const WatchButton = (props) => {
    const link = props.link
  const renderContents = () => {
      return <div className="Gameplay-WatchButton">
          <FontAwesomeIcon icon={faPlay}/>
          <div style={{marginLeft: "10px"}}>WATCH</div>
      </div>
  };
  return (
    <BulletButton
      renderContents={renderContents}
      color="#fcfe15"
      hoverColor="#ffff50"
      height="50"
    />
  );
};

export default WatchButton;
