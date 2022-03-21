import React from "react";

const Chanel = (props) => {
  const { photoSrc, href, sizePx } = props;
  return (
    <a href={href} target="_blank">
      <div
        className={`Community-Chanel ${props.className ? props.className : ""}`}
        style={{
          backgroundImage: `url(${photoSrc})`,
          width: `${sizePx}px`,
          height: `${sizePx}px`,
        }}
      ></div>
    </a>
  );
};

export default Chanel;
