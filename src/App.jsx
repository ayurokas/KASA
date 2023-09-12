// Ce code crée le composant principal "App" qui gère la navigation entre différentes pages de l'application.
// Il utilise React Router pour définir des routes vers les pages d'accueil, de détails de l'hébergement, À propos et une page d'erreur 404.
// Le composant Header est affiché en haut de chaque page, et le composant Footer en bas de chaque page.import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Error from "./pages/Error";

// Définition du composant "App" qui gère la navigation entre les pages de l'application
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Accommodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
