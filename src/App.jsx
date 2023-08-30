import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
