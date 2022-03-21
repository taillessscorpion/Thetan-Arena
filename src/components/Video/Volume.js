import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const Volume = (props) => {
  return (
    <div className="VolumeButton" onClick={props.toggleHandler}>
      <FontAwesomeIcon icon={props.value ? faVolumeHigh : faVolumeXmark} />
    </div>
  );
};

export default Volume;
