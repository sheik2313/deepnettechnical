import React from 'react'
import'./navbar.css'

function Navbar() {
 
  return (
    <div>
      <nav className="navbar">
      <div className="logo">DEEP NET SOFT</div>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/addmenu">ADD MENU</a></li>
        <li><a href="/">MAKE A RESERVATION</a></li>
        <li><a href="/">CONTACT US</a></li>
      </ul>
    </nav>

    </div>
  )
}

export default Navbar
