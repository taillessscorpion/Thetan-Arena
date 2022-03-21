import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Button = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(`/${props.content}`);
  };
  return (
    <div
      onClick={navigateTo}
      className={`ScrollBar-Button ${
        location.pathname.slice(1) === props.content
          ? "ScrollBar-Button__Active"
          : ""
      }`}
      href={`/${props.content}`}
    >
      <div className="PreventInherit">{props.content.replace("-", " ")}</div>
    </div>
  );
};

export default Button;
