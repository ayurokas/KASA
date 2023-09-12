// Ce code crée un composant React "Accommodation" qui représente la page de détails d'un hébergement.
// Il utilise des paramètres d'URL pour obtenir l'ID de l'hébergement, charge les données d'hébergement à l'aide du hook personnalisé "useAccommodation",
// et affiche les détails de l'hébergement, y compris les images, les informations sur l'hôte, les balises, la notation, la description et les équipements.
// Si l'hébergement n'est pas trouvé, il redirige vers la page d'erreur 404.

import { useParams, Navigate } from "react-router-dom";
import { useAccommodation } from "../utils/useAccommodation";
import Dropdown from "../components/Dropdown";
import Slider from "../components/Slider";
import Rating from "../components/Rating";

// Définition du composant "Accommodation"
function Accommodation() {
  const { id } = useParams();// Obtention de l'ID de l'hébergement depuis les paramètres d'URL
  const { data, isLoading, error } = useAccommodation();// Utilisation du hook "useAccommodation" pour obtenir les données d'hébergement

  if (!error && !isLoading && data) {
    const accommodation = data.find((object) => object.id === id);

    if (!accommodation) {
       // Si l'hébergement n'est pas trouvé, rediriger vers la page d'erreur 404
      return <Navigate to="/404"></Navigate>;
    }
    // Extraction des données de l'hébergement
    const { pictures, title, location, host, tags, rating, description, equipments } = accommodation;

    return (
      <div className="main-container">
        <Slider pictures={pictures} />
        <header className="accommodation__info">
          <section className="accommodation__details">
            <h1>{title}</h1>
            <p>{location}</p>
            <ul className="tags">
               {/* Affichage des balises (tags) associées à l'hébergement */}
              {tags.map((tag, index) => (
                <li className="tags__item" key={`${tag}-${index}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>
          <section className="host">
            <div className="host__details">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
            {/* Composant Rating pour afficher la notation en étoiles */}
            <Rating value={rating} />
          </section>
        </header>
        {/* Section pour afficher les descriptions et équipements en utilisant le composant Dropdown */}
        <section className="dropdown--double">
          <Dropdown title="Description" content={description} defaultOpen={false} />
          <Dropdown title="Equipements" content={equipments} defaultOpen={false} />
        </section>
      </div>
    );
  }
}

export default Accommodation;
