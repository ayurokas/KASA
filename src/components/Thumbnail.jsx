//Ce code crée un composant React "Thumbnail" qui génère une liste de vignettes liées aux pages de détails de logement.
// Il utilise NavLink pour créer des liens de navigation dynamiques en fonction de l'ID de chaque logement.

import React from "react";
// Import de NavLink depuis React Router pour gérer la navigation entre les pages
import { NavLink } from "react-router-dom";

// Définition du composant "Thumbnail" qui prend une prop "data" (tableau d'objets)
function Thumbnail({ data }) {
  return (
    // Conteneur de liste non ordonnée pour les vignettes
    <ul className="thumbnail">
      {data.map((object) => (
        //genere un link dynamique 
        <NavLink to={"/logement/" + object.id} key={object.id}>
          <li className="thumbnail__item">
            <img className="thumbnail__cover" src={object.cover} alt={object.title} />
            <div className="thumbnail__title">
              <h2>{object.title}</h2>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default Thumbnail;
