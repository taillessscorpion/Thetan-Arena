import React, { useEffect, useState } from "react";
import "./index.css";
import SlideBox from "../utilities/SlideBox";
import WatchButton from "./WatchButton";

const Gameplay = (props) => {
  const screenWidth = props.screenWidth;
  const itemsPerScreen = 1;
  const slideItems = [
    {
      photoSrc: "https://thetanarena.com/ca9d6b88620335e689a3.png",
      symbolSrc: "https://thetanarena.com/4c6bfdc2182e20c3a04a.png",
      bgColor:
        "linear-gradient(to right,transparent,rgba(185,112,82,0.9) 65%,rgba(185,112,82,0.3))",
      name: "BATTLE ROYALE",
      type: "Solo - Duo",
      text: [
        "Stay alive with your friend or be the last man standing. Show your skills",
        "and survive among a massive battle between 42 players/ 21 duos in this",
        "game mode.",
      ],
      link: "https://www.youtube.com/embed/e6Qkthx7kho?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    },
    {
      photoSrc: "https://thetanarena.com/faf35614d5c3c76413be.png",
      symbolSrc: "https://thetanarena.com/790cd16e0e2183ae7934.png",
      bgColor:
        "linear-gradient(to right,transparent,rgba(166,81,125,0.8) 65%,rgba(166,81,125,0.3))",
      name: "DEATH MATCH",
      type: "4v4",
      text: [
        "Talent may win fights, but teamwork wins games. Form a group of 4",
        "players and battle with others. Lead your teammates and bring them",
        "all to glorious victory.",
      ],
      link: "https://www.youtube.com/embed/sZz9QXMzQ8s?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    },
    {
      photoSrc: "https://thetanarena.com/b7f9273fbe86d433a9a6.png",
      symbolSrc: "https://thetanarena.com/4368b549e36212523a1a.png",
      bgColor:
        "linear-gradient(to right,transparent,rgba(76,144,190,0.8) 65%,rgba(76,144,190,0.3))",
      name: "SUPER STAR",
      type: "4v4",
      text: [
        "Violence is not always the answer, but superstars are. Gather your",
        "team, defend each other and steal superstars before the enemies do in",
        "this increasingly fast-paced mode.",
      ],
      link: "https://www.youtube.com/embed/DljQfL4OJs4?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    },
    {
      photoSrc: "https://thetanarena.com/5b65f74d1363eb9cfe85.png",
      symbolSrc: "https://thetanarena.com/25118e1c4fb12a700d35.png",
      bgColor:
        "linear-gradient(to right,transparent,rgba(174,86,157,0.8) 65%,rgba(174,86,157,0.3))",
      name: "TOWER DESTROY",
      type: "4v4",
      text: [
        "This mode is inspired by traditional MOBA games where you and your",
        "team rush toward the enemy base and bring down their nexus (tower).",
      ],
      link: "https://www.youtube.com/embed/tvH1XpEIEcE?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    },
  ];
  const renderTexts = (texts) => {
    const textElements = [];
    texts.forEach((txt, idx) => {
      textElements.push(<div key={idx}>{txt}</div>);
    });
    return textElements;
  };
  const renderSlideChildren = () => {
    const Elements = [];
    slideItems.forEach((item, index) => {
      const { photoSrc, symbolSrc, bgColor, name, type, text, link } = item;
      Elements.push(
        <div
          style={{ width: `${screenWidth / itemsPerScreen}px` }}
          key={index}
          className="Gameplay-SlideBox-Item-Wrapper"
        >
          <div className="Gameplay-SlideBox-Item-Container">
            <div className="Gameplay-SlideBox-Item-Photo-Wrapper">
              <img
                draggable={false}
                className="Gameplay-SlideBox-Item-Photo"
                src={photoSrc}
              />
            </div>
            <div className="Gameplay-SlideBox-Item-Info-Wrapper">
              <div className="Gameplay-SlideBox-Item-Info-Container">
                <div className="Gameplay-SlideBox-Item-Info-Symbol-Container">
                  <img className="Gameplay-SlideBox-Item-Info-Symbol" draggable={false} src={symbolSrc} />
                </div>
                <div className="Gameplay-SlideBox-Item-Info-Name">{name}</div>
                <div className="Gameplay-SlideBox-Item-Info-Type">{type}</div>
                <div className="Gameplay-SlideBox-Item-Info-Text-Container">{renderTexts(text)}</div>
                <div className="Gameplay-SlideBox-Item-Info-Button"><WatchButton link={link}/></div>
              </div>
            </div>
            <div
              className="Gameplay-SlideBox-Item-BG"
              style={{ background: `${bgColor}` }}
            ></div>
          </div>
        </div>
      );
    });
    return Elements;
  };
  return (
    <div className="Page Gameplay" style={props.style ? props.style : {}}>
      <div className="Gameplay-Background ImageBackground">
        <div className="MainTittle Gameplay-Tittle">GAMEPLAY</div>
        <div className="MainDetail Gameplay-Detail">
          Thetan Arena's gameplay is designed to revolve around the combination
          between your personal skills and teamwork
          <br />
          Challenge yourself with a wide variety of game modes:MOBA &amp; Battle
          Royale, coming with monthly updates and attractive rewards
        </div>
        <div className="Gameplay-SlideBox-Wrapper">
          <SlideBox
            id="Gameplay-SlideBox"
            renderChildren={renderSlideChildren}
            itemsPerScreen={itemsPerScreen}
            itemsArrayLength={slideItems.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
