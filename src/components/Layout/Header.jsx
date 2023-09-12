// Ce code crée un composant React "Header" qui représente la partie supérieure de la page,
// y compris la navigation et le logo. L'état de défilement est suivi pour appliquer des styles en fonction de la position de la page.

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/kasa_logo.svg";

// Définition du composant "Header"
function Header() {
    // Utilisation de useState pour gérer l'état de défilement de la page
  const [scrollNav, setScrollNav] = useState(false);

  // Fonction "changeNav" pour détecter le défilement et changer l'état "scrollNav" en conséquence
  const changeNav = () => {
    if (window.scrollY > 5) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // Utilisation de useEffect pour ajouter un écouteur d'événement "scroll" lors du montage du composant
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <header className={scrollNav ? "header scroll" : "header"}>
      {/* Lien vers la page d'accueil avec le logo */}
      <NavLink to="/">
        <img src={Logo} className="header__logo" alt="Kasa Logo" />
      </NavLink>
      <nav className="header__links">
        {/* Lien actif vers la page d'accueil */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "header__link--active" : "header__link")}>
          Accueil
        </NavLink>
        {/* Lien actif vers la page "À propos" */}
        <NavLink to="/about" className={({ isActive }) => (isActive ? "header__link--active" : "header__link")}>
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
