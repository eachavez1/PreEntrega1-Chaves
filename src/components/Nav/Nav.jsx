import React from 'react'
import "./nav.css"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <Link to="/">
          <img src="imagenes/logo.png"/>
        </Link>

        <ul>
            <li><Link to="/category/iPhone">iPhone</Link></li>
            <li><Link to="/category/AppleWatch">AppleWatch</Link></li>
            <li><Link to="/category/airpods">Airpods</Link></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Nav