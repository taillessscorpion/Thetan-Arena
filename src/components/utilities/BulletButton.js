import React, { useState } from "react";

const BulletButton = (props) => {
  const { height, color, hoverColor } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="BulletButton-Wrapper"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className={`BulletButton-Container`}>
        <div
          className="BulletButton-Achor_Left"
          style={{
            borderTop: `${height * 0.7}px solid transparent`,
            borderRight: `15px solid ${isHover ? hoverColor : color}`,
            borderBottom: `${height * 0.3}px solid transparent`,
          }}
        ></div>
        <a
          className={`BulletButton-Achor`}
          style={{
            height: `${height}px`,
            backgroundColor: `${!isHover ? color : hoverColor}`,
          }}
          href={props.href ? props.href : ""}
          target="_blank"
        >
          {props.renderContents()}
        </a>
        <div
          className="BulletButton-Achor_Right"
          style={{
            borderBottom: `${height * 0.7}px solid transparent`,
            borderLeft: `15px solid ${isHover ? hoverColor : color}`,
            borderTop: `${height * 0.3}px solid transparent`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default BulletButton;
