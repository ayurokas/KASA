import { NavLink } from "react-router-dom";
import Logo from "../../assets/kasa_logo_white.svg";

function Footer() {
  return (
    <footer>
      <NavLink to="/">
        <img src={Logo} className="footer__logo" alt="Kasa Logo" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
