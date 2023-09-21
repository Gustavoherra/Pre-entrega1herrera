import React from "react";
import "./NavBar.css";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <nav>
      <ul>
      <Button variant="outlined">HOME</Button>
      <Button variant="outlined">PRODUCTOS</Button>
      <Button variant="outlined">FINACIACION</Button>
        <li>
          <button><AddShoppingCartOutlinedIcon /></button>
        </li>
        
      </ul>
    </nav>
    
  );

};

export default NavBar;
