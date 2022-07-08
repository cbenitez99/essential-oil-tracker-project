import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/navbar.css";

function NavBar() {
  return (
    <>
        <NavLink className="nav-bar" to="/">Home</NavLink> |{" "}
        <NavLink className="nav-bar" to="/products">Products</NavLink>
    </>
    
  );
};

export default NavBar;