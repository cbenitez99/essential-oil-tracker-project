import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

function NavBar() {
  return (
    <NavLink className="nav-bar" to="/">Home</NavLink>
  )
}

export default NavBar