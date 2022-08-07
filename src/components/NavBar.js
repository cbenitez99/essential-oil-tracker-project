import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/navbar.css";

function NavBar() {
  const {user} = useContext(AppContext);

  if(user) {
    return (
      <>
        <NavLink className="nav-bar" to="/">Home</NavLink> |{" "}
        <NavLink className="nav-bar" to={`/users/${user.id}`}>Profile</NavLink> |{" "}  
        <NavLink className="nav-bar" to="/products">Products</NavLink>     
      </>
    );

  } else {
    return ( 
      <>
        <NavLink className="nav-bar" to="/">Home</NavLink> |{" "}
        <NavLink className="nav-bar" to="/products">Products</NavLink>
      </>
    )
  };
};

export default NavBar;