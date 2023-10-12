import React from "react";
import "./NavBar.css";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/HomePage">
          HOME
        </Link>
        <Link className="li" to="/ProductosPage">
          PRODUCTOS
        </Link>
        <Link className="li" to="/FinazasPage">
          FINANZAS
        </Link>
      </ul>
    </nav>
      
    
  );

};

export default NavBar;
