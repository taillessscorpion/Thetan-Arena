import React from "react";

const Logo = (props) => {
  return <div className={`Logo ${props.className ? props.className : ""}`} style={{height: `${props.size}px`, width: `${props.size}px`}}></div>;
};
export default Logo;
