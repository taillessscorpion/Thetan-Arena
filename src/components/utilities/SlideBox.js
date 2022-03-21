import React, { useEffect, useState } from "react";

const SlideBox = (props) => {
  const { itemsPerScreen, itemsArrayLength, renderChildren, id } = props;
  const [slideElement, setSlideElement] = useState(null);
  const [isSliding, setIsSliding] = useState(false);
  const [slidePageX, setSlidePageX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAchor, setCurretnAchor] = useState(0);

  const startSliding = (e) => {
    setSlidePageX(e.pageX);
    setIsSliding(true);
  };
  const sliding = (e) => {
    if (!isSliding) return;
    document.getElementById(id).scrollBy(-e.movementX, 0);
  };
  const endSliding = (e) => {
    if (!isSliding) return;
    setIsSliding(false);
    const ArrayWidth = Math.floor(
      (slideElement.clientWidth * itemsArrayLength) / itemsPerScreen
    );
    const ItemWidth = Math.floor(slideElement.clientWidth / itemsPerScreen);
    const slideDistance = e.pageX - slidePageX;
    const slideMove = Math.abs(Math.floor(slideDistance / ItemWidth)) + 1;
    if (slideDistance > 0) {
      if (currentIndex >= slideMove) setCurrentIndex(currentIndex - slideMove);
      else {
        slideElement.scrollTo({
          top: 0,
          left: ArrayWidth * 3 + currentIndex * ItemWidth,
          behavior: "auto",
        });
        setCurrentIndex(itemsArrayLength + currentIndex - slideMove);
      }
    } else if (slideDistance < 0) {
      if (currentIndex + slideMove <= itemsArrayLength - 1)
        setCurrentIndex(currentIndex + slideMove - 1);
      else {
        slideElement.scrollTo({
          top: 0,
          left: ArrayWidth + currentIndex * ItemWidth,
          behavior: "auto",
        });
        setCurrentIndex(currentIndex + slideMove - itemsArrayLength - 1);
      }
    }
    setSlidePageX(0);
  };
  const togglePrevious = () => {
    const ArrayWidth = Math.floor(
      (slideElement.clientWidth * itemsArrayLength) / itemsPerScreen
    );
    const ItemWidth = Math.floor(slideElement.clientWidth / itemsPerScreen);
    if (currentIndex >= 1) setCurrentIndex(currentIndex - 1);
    else {
      slideElement.scrollTo({
        top: 0,
        left: ArrayWidth * 3,
        behavior: "auto",
      });
      setCurrentIndex(itemsArrayLength - 1);
    }
  };
  const toggleNext = () => {
    const ArrayWidth = Math.floor(
      (slideElement.clientWidth * itemsArrayLength) / itemsPerScreen
    );
    const ItemWidth = Math.floor(slideElement.clientWidth / itemsPerScreen);
    if (currentIndex < itemsArrayLength - 1) setCurrentIndex(currentIndex + 1);
    else {
      slideElement.scrollTo({
        top: 0,
        left: ArrayWidth * 2 - ItemWidth,
        behavior: "auto",
      });
      setCurrentIndex(0);
    }
  };
  const toggleAchor = (achorIndex) => {
    setCurrentIndex(achorIndex * itemsPerScreen);
  };
  const renderAchor = () => {
    const Elements = [];
    const numberOfAchor = Math.ceil(itemsArrayLength / itemsPerScreen);
    for (let i = 0; i < numberOfAchor; ++i) {
      Elements.push(
        <div
          key={i}
          onClick={() => {
            toggleAchor(i);
          }}
          className={`SlideBox-Achor ${currentAchor === i ? "Achor-Active" : ""}`}
        ></div>
      );
    }
    return Elements;
  };
  useEffect(() => {
    if (!slideElement) return;
    const ArrayWidth = Math.floor(
      (slideElement.clientWidth * itemsArrayLength) / itemsPerScreen
    );
    const ItemWidth = Math.floor(slideElement.clientWidth / itemsPerScreen);
    slideElement.scrollTo({
      top: 0,
      left: ArrayWidth * 2 + ItemWidth * currentIndex,
      behavior: "smooth",
    });
    setCurretnAchor(Math.floor(currentIndex / itemsPerScreen));
  }, [currentIndex]);
  useEffect(() => {
    const newSlideElement = document.getElementById(id);
    setSlideElement(newSlideElement);
    newSlideElement.scrollTo({
      top: 0,
      left: Math.floor(
        (newSlideElement.clientWidth * itemsArrayLength * 2) / itemsPerScreen
      ),
      behavior: "auto",
    });
  }, []);
  return (
    <div className="SlideBox-Wrapper">
      <div className="SlideBox-Container">
        <div
          id={id}
          className="SlideBox-SlidePlate-Wrapper"
          onMouseDown={(e) => {
            startSliding(e);
          }}
          onMouseMove={(e) => {
            sliding(e);
          }}
          onMouseUp={(e) => {
            endSliding(e);
          }}
          onMouseLeave={(e) => {
            endSliding(e);
          }}
        >
          <div
            className="SlideBox-SlidePlate-Container"
            style={{
              width: `calc(${itemsArrayLength * 500}%/${itemsPerScreen})`,
            }}
          >
            {renderChildren()}
            {renderChildren()}
            {renderChildren()}
            {renderChildren()}
            {renderChildren()}
          </div>
        </div>
        <div className="SlideBox-Button-Wrapper">
          <div className="SlideBox-Button-Container">
            <div
              className="SlideBox-Button"
              onClick={() => {
                togglePrevious();
              }}
            >
              <img
                className="SlideBox-Button-Img"
                src="/photos/previousBtn.png"
              />
              <div className="SlideBox-Button-Text">Previous</div>
            </div>
            <div
              className="SlideBox-Button"
              onClick={() => {
                toggleNext();
              }}
            >
              <div className="slideBox-Button-Text">Next</div>
              <img className="SlideBox-Button-Img" src="/photos/nextBtn.png" />
            </div>
          </div>
        </div>
        <div className="SlideBox-Achor-Wrapper">
          <div className="SlideBox-Achor-Container">{renderAchor()}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideBox;
