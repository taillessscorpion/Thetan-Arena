import "./App.css";
import ScrollBar from "./components/ScrollBar";
import FixedBar from "./components/FixedBar";
import Home from "./components/Home";
import Video from "./components/Video";
import Gameplay from "./components/Gameplay";
import NftsItem from "./components/NftsItem";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import Partner from "./components/Partner";
import Footer from "./components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const urls = [
  "home",
  "video",
  "gameplay",
  "nfts-item",
  "team",
  "roadmap",
  "partner",
  "footer",
];
const FooterHeight = {
  lg: 528,
};
const BreakPoints = {
  xl: 1699,
  lg: 1199,
  md: 991,
  sm: 767,
  xl: 576,
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [screenWidth, setScreenWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0, () => {});
  const [isAutoScrling, setIsAutoScrling] = useState(false);
  const [showScrollBar, setShowScrollBar] = useState(true);
  const [hasTimeout, setHasTimeout] = useState(null);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  const handleWheel = (e) => {
    if (!isAutoScrling) {
      if (e.deltaY < 0) {
        if (currentIndex > 0) {
          const newIndex = currentIndex - 1;
          navigate(`/${urls[newIndex]}`);
        }
      } else if (e.deltaY > 0) {
        if (currentIndex < urls.length - 1) {
          const newIndex = currentIndex + 1;
          navigate(`/${urls[newIndex]}`);
        }
      }
    }
  };
  const handleKey = (e) => {
    e.preventDefault();
    if (!isAutoScrling) {
      if (e.keyCode === 32) {
        if (isScrollUp) {
          if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            navigate(`/${urls[newIndex]}`);
          } else {
            navigate(`/${urls[1]}`);
          }
        } else {
          if (currentIndex < urls.length - 1) {
            const newIndex = currentIndex + 1;
            navigate(`/${urls[newIndex]}`);
          } else {
            navigate(`/${urls[urls.length - 2]}`);
          }
        }
      } else if (e.keyCode === 38) {
        if (currentIndex > 0) {
          const newIndex = currentIndex - 1;
          navigate(`/${urls[newIndex]}`);
        }
      } else if (e.keyCode === 40) {
        if (currentIndex < urls.length - 1) {
          const newIndex = currentIndex + 1;
          navigate(`/${urls[newIndex]}`);
        }
      }
    }
  };
  useEffect(() => {
    const url = location.pathname.slice(1);
    const newIndex = urls.indexOf(url);
    const direction = currentIndex - newIndex;
    setIsAutoScrling(true);
    let movedY = 0;
    const interval = setInterval(() => {
      movedY += 5;
      if (movedY <= 100) {
        if (currentIndex === urls.length - 1) {
          setTranslateY(
            Math.floor(
              -currentIndex * window.innerHeight +
                (window.innerHeight - FooterHeight.lg) +
                (movedY / 100) *
                  ((direction - 1) * window.innerHeight + FooterHeight.lg)
            )
          );
        } else if (newIndex === urls.length - 1) {
          setTranslateY(
            Math.floor(
              -currentIndex * window.innerHeight +
                (movedY / 100) *
                  ((direction + 1) * window.innerHeight - FooterHeight.lg)
            )
          );
        } else {
          setTranslateY(
            Math.floor(
              (-currentIndex + (movedY / 100) * direction) * window.innerHeight
            )
          );
        }
      } else if (movedY > 170) {
        clearInterval(interval);
        setIsAutoScrling(false);
      }
    }, 1);
    setIsScrollUp(currentIndex - newIndex > 0);
    setCurrentIndex(newIndex);
    setShowScrollBar(true);
    if (newIndex !== 0) {
      if (hasTimeout) {
        clearTimeout(hasTimeout);
        setHasTimeout(null);
      }
      const timeout = setTimeout(() => {
        if (location.pathname !== "/home") {
          setShowScrollBar(false);
        }
      }, 5000);
      setHasTimeout(timeout);
    }
  }, [location.pathname]);
  useEffect(() => {
    window.onwheel = (e) => {
      if (screenWidth > BreakPoints.md) {
        handleWheel(e);
      }
    };
  }, [currentIndex, isAutoScrling, screenWidth]);
  useEffect(() => {
    window.onkeydown = (e) => {
      if (screenWidth > BreakPoints.md) {
        handleKey(e);
      }
    };
  }, [currentIndex, isAutoScrling, isScrollUp, screenWidth]);
  useEffect(() => {
    if (location.pathname === "/") navigate("/home");
    setScreenWidth(window.innerWidth);
    window.onresize = () => {
      setScreenWidth(window.innerWidth);
    };
  }, []);
  return (
    <div className="App">
      <ScrollBar
        show={showScrollBar}
        urls={urls}
        isHome={location.pathname === "/home"}
      />
      <FixedBar show={location.pathname !== "/footer"} />
      <div
        className="App-Slide-Container"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <Home screenWidth={screenWidth}/>
        <Video />
        <Gameplay screenWidth={screenWidth}/>
        <NftsItem screenWidth={screenWidth}/>
        <Team screenWidth={screenWidth}/>
        <Roadmap />
        <Partner />
        <Footer />
      </div>
    </div>
  );
};

export default App;
