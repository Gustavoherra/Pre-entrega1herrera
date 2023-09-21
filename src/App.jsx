import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";


const App = () => {
  
  const [number, setNumber] = useState();

  return (
    <div>
      <Header
        title="PURA FUERZA"
      />
      <NavBar />
      <ItemListContainer />
      <div className="UserSection">
      </div>
      
    </div>
  );
};

export default App;
