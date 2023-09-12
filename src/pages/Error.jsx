// Ce code crée un composant React "Error" qui représente une page d'erreur 404.
// Il affiche un message d'erreur personnalisé et un lien pour retourner à la page d'accueil en utilisant NavLink.

import { NavLink } from "react-router-dom";  // Import de NavLink depuis React Router

// Définition du composant "Error"
function Error() {
  return (
    <div className="errorContent">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}

export default Error;
