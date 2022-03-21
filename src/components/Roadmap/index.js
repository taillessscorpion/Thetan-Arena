import React from "react";
import "./index.css";
import Icon from "./icon";
import { useLocation } from "react-router-dom";

const Roadmap = (props) => {
  const events = [
    ["Q3 2021", "Milestone 1", "Alpha test", "$THG IDO", "NFTs Heroes"],
    [
      "Q4 2021",
      "Milestone 2",
      "Beta test",
      "Official Launch",
      "Special events & Hero Rental",
    ],
    ["Q1 2022", "Milestone 3", "Guild", "Cosmetic system", "42 Players BR"],
    ["Q2 2022", "Milestone 4", "Pets System", "Guild Quest", "Staking"],
    ["Q3 2022", "Milestone 5", "Co-op modes", "Guild Wars", "Streaming"],
    ["Q4 2022", "Milestone 6", "Tournament", "Battle pass", "Donate system"],
    ["Q1 2023", "Milestone 7", "Monthly content", "Offline event", "Live-ops"],
  ];
  const location = useLocation();
  const renderTimepoints = () => {
    const elements = [];
    events.forEach((item, index) => {
      elements.push(
        <div key={index} className="Timepoint-Wrapper">
          <div className="Timepoint-Container">
            <div
              onAnimationEnd={(e) => {
                e.target.className = "Timepoint-Mark";
              }}
              style={
                location.pathname === "/roadmap"
                  ? {
                      animationDelay: `${(Math.floor(index * 1.25) + 3) / 10}s`,
                    }
                  : {}
              }
              className={`Timepoint-Mark Hide ${
                location.pathname === "/roadmap" ? "AppearAnimation" : ""
              }`}
            ></div>
            <div
              onAnimationEnd={(e) => {
                e.target.className = "Timepoint-Time";
              }}
              style={
                location.pathname === "/roadmap"
                  ? {
                      animationDelay: `${(Math.floor(index * 1.25) + 4) / 10}s`,
                    }
                  : {}
              }
              className={`Timepoint-Time Hide ${
                location.pathname === "/roadmap" ? "AppearAnimation" : ""
              }`}
            >
              {item[0]}
            </div>
            <div
              onAnimationEnd={(e) => {
                e.target.className = "Timepoint-Name";
              }}
              style={
                location.pathname === "/roadmap"
                  ? {
                      animationDelay: `${(Math.floor(index * 1.25) + 4) / 10}s`,
                    }
                  : {}
              }
              className={`Timepoint-Name Hide ${
                location.pathname === "/roadmap" ? "AppearAnimation" : ""
              }`}
            >
              {item[1]}
            </div>
          </div>
        </div>
      );
    });
    return elements;
  };
  const renderItems = () => {
    const elements = [];
    events.forEach((item, index) => {
      elements.push(
        <div className="Item-Container" key={index}>
          <div className="Item-Bar" key={index}>
            <Icon src={`/photos/roadmap/${0}.png`} />
            <div className="Item-Text">{item[2]}</div>
          </div>
          <div className="Item-Bar">
            <Icon src={`/photos/roadmap/${1}.png`} />
            <div className="Item-Text">{item[3]}</div>
          </div>
          <div className="Item-Bar">
            <Icon src={`/photos/roadmap/${2}.png`} />
            <div className="Item-Text">{item[4]}</div>
          </div>
        </div>
      );
    });
    return elements;
  };
  return (
    <div className="Page Roadmap" style={props.style ? props.style : {}}>
      <img className="Gem-Background" src="/photos/roadmap/gem.png" />
      <div className="Roadmap-Container">
        <div className="MainTittle Roadmap-Tittle">ROADMAP</div>
        <div className="Process-Wrapper">
          <div className="Process-Container">
            <div
              onAnimationEnd={(e) => {
                e.target.className = "Arrow-Wrapper";
              }}
              style={
                location.pathname === "/roadmap"
                  ? {
                      animationDelay: `${
                        (Math.floor(events.length * 1.25) + 4) / 10
                      }s`,
                    }
                  : {}
              }
              className={`Arrow-Wrapper Hide ${
                location.pathname === "/roadmap" ? "AppearAnimation" : ""
              }`}
            >
              <div className="Arrow-Text">To the moon...</div>
              <img
                className="Arrow-Img"
                src="/photos/roadmap/arrowUp.png"
              ></img>
            </div>
            <div className="Process-Timepoint">{renderTimepoints()}</div>
            <div className="Process-Timeline">
              <img src="/photos/roadmap/timeline.png" />
            </div>
            <div className="Process-Item">{renderItems()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
