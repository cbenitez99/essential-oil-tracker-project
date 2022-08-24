import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/navbar.css";

function NavBar() {
  const {user} = useContext(AppContext);

  if(user) {
    return (
      <div className='nav-bar'>
        <NavLink className="nav-links" to="/home">Home</NavLink> |{" "}
        <NavLink className="nav-links" to={`/users/${user.id}`}>Profile</NavLink> |{" "}  
        <NavLink className="nav-links" to="/products">Products</NavLink>     
      </div>
    );

  } else {
    return ( 
      <div className='nav-bar'>
        <NavLink className="nav-links" to="/products">Products</NavLink>
      </div>
    )
  };
};

export default NavBar;