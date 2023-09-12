// Ce code crée un composant React "Dropdown" qui représente une liste déroulante avec un titre et un contenu.
// L'état d'ouverture est géré par useState, et le contenu peut être soit une chaîne de caractères, soit un tableau de chaînes de caractères.

import { useState } from "react";// Import de useState pour gérer l'état local
import PropTypes from "prop-types"; // Import de PropTypes pour spécifier les types de props

// Définition des types de props attendues par le composant Dropdown
Dropdown.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired]),
  title: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool.isRequired,
};

// Définition du composant "Dropdown" qui prend les props "title", "content" et "defaultOpen"
function Dropdown({ title, content, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown__header">
        <h2>{title}</h2>
        <i className={isOpen ? " fa-solid fa-chevron-up dropdown__arrow--open" : "fa-solid fa-chevron-up dropdown__arrow"}></i>
      </button>

      <div className={isOpen ? "dropdown__content" : "dropdown__content--hidden"}>
        {Array.isArray(content) ? (
           // Si "content" est un tableau, afficher son contenu sous forme de liste
          <ul>
            {content.map((el, index) => (
              <li key={`${el}-${index}`}>{el}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </article>
  );
}

export default Dropdown;
