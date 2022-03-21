import React, { useMemo } from "react";
import Button from "./Button";
import Logo from "../utilities/Logo";
import BulletButton from "../utilities/BulletButton";
import "./index.css";

const ScrollBar = (props) => {
  const marketplaceUrl = "https://marketplace.thetanarena.com";
  const renderBulletContents = () => {
    return <div className="Marketplace">marketplace</div>;
  };
  const renderButtons = () => {
    const buttonElements = [];
    props.urls.forEach((item, index) => {
      if (index < props.urls.length - 1)
        buttonElements.push(<Button key={index} content={item} />);
    });
    buttonElements.push(
      <BulletButton
        key={props.urls.length - 1}
        height="40"
        color="#00a9ff"
        hoverColor="#0df"
        href={marketplaceUrl}
        renderContents={renderBulletContents}
      />
    );
    return buttonElements;
  };
  return (
    // props.show && (
    <div
      className={`ScrollBar-Wrapper ${
        props.show ? "ScrollBar_In" : "ScrollBar_Out"
      }`}
    >
      <div className="ScrollBar-Container" style={props.isHome ? {backgroundColor: "transparent"} : {}} >
        <Logo className="ScrollBar-Logo" />
        <div className="ScrollBar-Menu">{renderButtons()}</div>
      </div>
    </div>
    // )
  );
};

export default ScrollBar;
