import React from 'react'
import "./nav.css"
import CartWidget from './CartWidget'

const Nav = () => {
  return (
    <nav className='nav'>
        <img src="/imagenes/logo.png"/>
        <ul>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">AirPods</a></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Nav