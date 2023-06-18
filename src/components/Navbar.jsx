import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <main className="navbar">
   <nav className="container">
    <div>
    <NavLink className="nav-link logo" to="/">BookShelf</NavLink>  
    </div>
    <div>
        <ul className="nav-links">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink  className="nav-link" to="/search">Search</NavLink></li>
        </ul>
    
 
    </div>
   </nav>
   </main>
  )
}

export default Navbar