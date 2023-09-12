import React, { useState, useEffect } from "react";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
let slideInterval;
let intervalTime = 5000;

const Slider = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  useEffect(() => {
    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };
    auto();
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {pictures.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={`slider-${index}`}>
            {index === current && <img src={slide} alt={"accommodation"} className="slider__picture" />}
            {length > 1 && (
              <>
                <img src={leftarrow} alt="button to left" className="slider__leftarrow" onClick={prevSlide} />
                <img src={rightarrow} alt="button to right" className="slider__rightarrow" onClick={nextSlide} />
                <div className="slider__nbr">
                  {index + 1} / {length}
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
