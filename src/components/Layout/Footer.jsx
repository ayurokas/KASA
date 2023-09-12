// Ce code crée un composant React "Footer" qui représente la partie inférieure de la page,
// généralement utilisée pour afficher des informations de pied de page, comme le logo et le copyright.

import { NavLink } from "react-router-dom";
import Logo from "../../assets/kasa_logo_white.svg";

// Définition du composant "Footer"
function Footer() {
  return (
    <footer>
       {/* Lien vers la page d'accueil avec le logo */}
      <NavLink to="/">
        <img src={Logo} className="footer__logo" alt="Kasa Logo" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
