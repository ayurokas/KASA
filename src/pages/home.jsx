//page accuille avec bannier et gallerie photo

import BannerBg from "../assets/banner_background.png";
import Thumbnail from "../components/Thumbnail";
import { useAccommodation } from "../utils/useAccommodation"; // page import json

function Home(){
    const bannerMessage = `Chez vous, \n partout et ailleurs`;
    const { data, isLoading, error } = useAccommodation();

    return(
        <div className="main-container">
        <section className="banner banner--home">
          <img src={BannerBg} alt="Bannière" />
          <h1> {bannerMessage} </h1>
        </section>
  
        <section className="gallery">
          {isLoading && <p>Recherche de logements...</p>}
          {error && <p>Il y a un problème</p>}
          {!error && !isLoading && data && <Thumbnail data={data} />}
        </section>
      </div>
    );
}

export default Home;