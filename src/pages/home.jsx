// Ce code crée un composant React "Home" qui représente la page d'accueil de l'application.
// Il affiche une bannière avec un message d'accueil et une galerie de vignettes de logements,
// en utilisant un hook personnalisé pour obtenir les données d'hébergement.

import BannerBg from "../assets/banner_background.png";
import Thumbnail from "../components/Thumbnail";
import { useAccommodation } from "../utils/useAccommodation";

function Home() {
  const bannerMessage = `Chez vous, \n partout et ailleurs`;
  const { data, isLoading, error } = useAccommodation(); // Utilisation du hook "useAccommodation" pour obtenir des données d'hébergement

  return (
    <div className="main-container">
      {/* Section de la bannière d'accueil */}
      <section className="banner banner--home">
        <img src={BannerBg} alt="Bannière" />
        <h1> {bannerMessage} </h1>
      </section>

      {/* Section de la galerie d'images des logements */}  
      <section className="gallery">
        {isLoading && <p>Recherche de logements...</p>}
        {error && <p>Il y a un problème</p>}
        {!error && !isLoading && data && <Thumbnail data={data} />}
      </section>
    </div>
  );
}

export default Home;
