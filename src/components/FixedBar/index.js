import React from "react";
import Chanel from "../utilities/Chanel";
import "./index.css";

const FixedBar = (props) => {
  const chanels = [
    {href: "https://www.facebook.com/thetanarena", photoSrc: "/photos/communities/fb.png"},
    {href: "https://twitter.com/ThetanArena", photoSrc:"/photos/communities/twitter.png"},
    {href: "https://discord.com/invite/Wfx2XDSuwe", photoSrc:"/photos/communities/discord.png"},
    {href: "https://t.me/thetanarenalinks", photoSrc:"/photos/communities/telegram.png"},
  ];
  const renderChanels = () => {
    const chanelElements = [];
    chanels.forEach((item, index) => {
      chanelElements.push(<Chanel className={index%2===1 ? "Disappear--sm" : ""} key={index} photoSrc={item.photoSrc} href={item.href} sizePx="35" />);
    });
    return chanelElements;
  };
  return props.show && <div className="FixedBar">{renderChanels()}</div>;
};

export default FixedBar;
