// Ce code crée un composant React "About" qui représente la page "À propos" de l'application.
// Il affiche une bannière et des informations sur la fiabilité, le respect, le service et la responsabilité à l'aide du composant "Dropdown".

import BannerBg from "../assets/about_background.jpg";
import Dropdown from "../components/Dropdown";

// Définition du composant "About"
function About() {
  return (
    <div className="main-container">
      {/* Section de la bannière de la page À propos */}
      <section className="banner">
        <img src={BannerBg} alt="Bannière de la page à propos" />
      </section>
       {/* Section d'affichage des informations sur la fiabilité, le respect, le service et la responsabilité */}
      <section className="infos">

        {/* Composant "Dropdown" pour afficher des informations sur la fiabilité */}
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          defaultOpen={false}
        />

        {/* Composant "Dropdown" pour afficher des informations sur le respect */}
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          defaultOpen={false}
        />

        {/* Composant "Dropdown" pour afficher des informations sur le service */}
        <Dropdown
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          defaultOpen={false}
        />
        {/* Composant "Dropdown" pour afficher des informations sur la responsabilité */}
        <Dropdown
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          defaultOpen={false}
        />
      </section>
    </div>
  );
}

export default About;
