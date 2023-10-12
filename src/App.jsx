import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import FinanzasPage from "./page/FinanzasPage";
import HomePage from "./page/HomePage";
import ProductosPage from "./page/ProductosPage";


const App = () => {
  
  const [number, setNumber] = useState();

  return (
    <Router>
    <div>
      <Header
        title="PURA FUERZA"
      />
      <NavBar />
      <ItemListContainer />
      <div className="UserSection">
      </div>
      </div>
      <Routes>
      <Route path="/Finanzas" element={<FinanzasPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/contact" element={<ProductosPage />} />
        </Routes>
    </Router>
  );
};

export default App;
