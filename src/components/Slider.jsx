// Ce code crée un composant React "Slider" qui affiche une série d'images avec des fonctionnalités de navigation automatique et manuelle.

// Import des dépendances React
import React, { useState, useEffect } from "react";
// Import des images pour les flèches gauche et droite
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
let slideInterval;
let intervalTime = 5000;

// Définition du composant "Slider" qui prend une prop "pictures" (tableau d'images)
const Slider = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  // Utilisation de useEffect pour gérer le défilement automatique des images
  useEffect(() => {
    // Fonction "auto" pour définir un intervalle de temps pour passer à la prochaine image
    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };
    auto();
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, [current]);

  //Fonction pour passer à la prochaine image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  // Rendu du composant "Slider"
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
