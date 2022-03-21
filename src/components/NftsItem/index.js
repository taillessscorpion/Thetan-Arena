import React, { useEffect, useState } from "react";
import "./index.css";
import SlideBox from "../utilities/SlideBox";

const NftsItem = (props) => {
  const screenWidth = props.screenWidth;
  const BreakPoints = {
    xl: 1699,
    lg: 1199,
    md: 991,
    sm: 767,
    xl: 576,
  };
  const slideItems = [
    "https://thetanarena.com/1189254063b2f6c4a0f6.png",
    "https://thetanarena.com/78bc9a272d7be733a98f.png",
    "https://thetanarena.com/d3ff4f7a54ad6ebfa69c.png",
    "https://thetanarena.com/56f42f4c6fec9504d601.png",
    "https://thetanarena.com/48549efdb77cbf1797e0.png",
    "https://thetanarena.com/d1bd4f96d7db1e481e91.png",
    "https://thetanarena.com/0729f24ae548ceb31340.png",
    "https://thetanarena.com/7b4f2b3f9e56a241ba98.png",
    "https://thetanarena.com/6533b5b9356fe28ba673.png",
    "https://thetanarena.com/30983395e80351ba2e53.png",
    "https://thetanarena.com/0a2ddc58ca96f0774ade.png",
    "https://thetanarena.com/76426d73b080fcef1c86.png",
    "https://thetanarena.com/a1197188c529327e3b19.png",
    "https://thetanarena.com/36b8dbf2314c18123ed0.png",
    "https://thetanarena.com/7d95ece50f6b5f23e796.png",
    "https://thetanarena.com/2a1c93b1dbabc84bde41.png",
    "https://thetanarena.com/4235748ad14c91685644.png",
    "https://thetanarena.com/89e97a3cff24eee10471.png",
    "https://thetanarena.com/e45e8cffd1ba8be74ab7.png",
    "https://thetanarena.com/e049a651fa9d73a4a808.png",
    "https://thetanarena.com/e9d2efab018cdc4f3611.png",
    "https://thetanarena.com/f00fc7f44f9ff48952ec.png",
    "https://thetanarena.com/f64e00cffab92c610d56.png",
    "https://thetanarena.com/eefe55382fb62d476948.png"
  ];
  const itemsArrayLength = 12;
  const [itemsPerScreen, setItemsPerScreen] = useState(0);

  useEffect(() => {
    if (screenWidth >= BreakPoints.lg) {
      setItemsPerScreen(7);
    } else if (screenWidth >= BreakPoints.md) {
      setItemsPerScreen(4);
    } else if (screenWidth >= BreakPoints.sm) {
      setItemsPerScreen(3);
    } else setItemsPerScreen(2);
  }, [screenWidth]);
  const renderSlideChildren = () => {
    const Elements = [];
    for (let i = 0; i < itemsArrayLength; ++i) {
      Elements.push(
        <div key={i} className="Ntts-Item-Wrapper">
          <div className="Nfts-Item-Photo-Wrapper">
            <img
              className="Nfts-Item-Photo"
              draggable={false}
              src={`${slideItems[i*2]}`}
            />
          </div>
          <div className="Nfts-Item-Photo-Wrapper">
            <img
              className="Nfts-Item-Photo"
              draggable={false}
              src={`${slideItems[i*2+1]}
              `}
            />
          </div>
        </div>
      );
    }
    return Elements;
  };
  return (
    <div className="Page Nfts" style={props.style ? props.style : {}}>
      <div className="Nfts-Background ImageBackground">
        <div className="MainTittle Nfts-Tittle">NFTS ITEM</div>
        <div className="MainDetail Nfts-Detail">
          Earn your NFTs item by playing the game and sell it on the marketplace
          to make money
        </div>
        <div className="Nfts-SlideBox-Wrapper">
          <SlideBox
            id="Nfts-SlideBox"
            renderChildren={renderSlideChildren}
            itemsPerScreen={itemsPerScreen}
            itemsArrayLength={itemsArrayLength}
          />
        </div>
      </div>
    </div>
  );
};

export default NftsItem;
