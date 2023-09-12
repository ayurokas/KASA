// page routz
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Error from "./pages/Error";


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
