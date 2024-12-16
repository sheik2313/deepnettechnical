import React from 'react'
import './menu.css'
import {  useNavigate,  } from 'react-router-dom'
function Menu() {
    const Navigate =useNavigate()
    const drinkspage=()=>{
        Navigate('/drinks')
    }
    const food=()=>{
      Navigate('/viewfood')
    }
 
  return (
    <div className="hero">
      <h1>MENU</h1>
      <p>
        Please take a look at our menu featuring food, drinks, and brunch. If
        you'd like to<br/> place an order, use the 'Order Online' button below the
        menu.
      </p>
      <div className="menu-buttons">
        <button onClick={food}>FOOD</button>
        <button onClick={drinkspage}>DRINKS</button>
        <button>BRUNCH</button>
      </div>
    </div>

  )
}

export default Menu
