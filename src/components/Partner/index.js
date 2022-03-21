import React, { useEffect } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";

const Partner = () => {
  const location = useLocation();
  const renderInvestors = () => {
    const Elements = [];
    for (let i = 0; i < 15; ++i) {
      Elements.push(
        <div className="Partner-Investor-Logo-Wrapper" key={i}>
          <img
            key={i}
            className="Partner-Investor-Logo"
            src={`photos/partner/${i}.png`}
          />
        </div>
      );
    }
    return Elements;
  };
  return (
    <div className="Page Partner">
      <div className="Partner-Wrapper">
        <div className="Partner-Container">
          <div className="Partner-Dev MainTittle">DEVELOPER</div>
          <img
            src="photos/partner/main.png"
            onAnimationEnd={(e) => {
              e.target.className = "Partner-Dev-Logo";
            }}
            style={
              location.pathname === "/partner" ? { animationDelay: ".5s" } : {}
            }
            className={`Partner-Dev-Logo Hide ${
              location.pathname === "/partner" ? "AppearAnimation" : ""
            }`}
          />
          <div className="Partner-Investor MainTittle">{`INVESTOR & PARTNER`}</div>
          <div
            onAnimationEnd={(e) => {
              e.target.className = "Partner-Investor-Container";
            }}
            style={
              location.pathname === "/partner" ? { animationDelay: ".5s" } : {}
            }
            className={`Partner-Investor-Container Hide
            ${location.pathname === "/partner" ? "AppearAnimation" : ""}
           `}
          >
            {renderInvestors()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
