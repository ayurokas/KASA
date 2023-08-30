import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/kasa_logo.svg";

function Header() {

  // État pour déterminer si l'utilisateur a fait défiler la page au-delà de 5 pixels.
  const [scrollNav, setScrollNav] = useState(false);

  // Mettre à jour l'état de scrollNav en fonction de la position de défilement.
  const changeNav = () => setScrollNav(window.scrollY > 5);

  // Ajouter un écouteur d'événement pour détecter le défilement de la page.
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    // Pour nettoyer l'écouteur d'événement
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <header className={scrollNav ? "header scroll" : "header"}>
      <NavLink to="/">
        <img src={Logo} className="header__logo" alt="Kasa Logo" />
      </NavLink>
      <nav className="header__links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "header__link--active" : "header__link")}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? "header__link--active" : "header__link")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
