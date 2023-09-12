// Ce code crée un composant React "Rating" qui affiche une notation sous forme d'étoiles en fonction de la valeur fournie en prop "value".
// Il utilise un tableau "range" pour générer les étoiles pleines ou vides en fonction de la valeur de notation.

import star from "../assets/star.svg";
import emptyStar from "../assets/emptyStar.svg";

// Définition du composant "Rating" qui prend une prop "value" (valeur de notation)
function Rating({ value }) {
  // Création d'un tableau "range" contenant les valeurs de notation possibles (ici, de 1 à 5)
  const range = [1, 2, 3, 4, 5];
  
  // Rendu du composant
  return (
    <div className="rating">
      {range.map((rangeElem, index) =>
      // Si la valeur fournie est supérieure ou égale à la valeur de notation actuelle,
        // afficher une étoile pleine, sinon afficher une étoile vide
        value >= rangeElem ? (
          <img key={`star-${index}`} src={star} alt="etoile" />
        ) : (
          <img key={`star-empty-${index}`} src={emptyStar} alt="etoile" />
        )
      )}
    </div>
  );
}

export default Rating;
