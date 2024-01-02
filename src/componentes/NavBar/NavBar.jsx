import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda R2A</h1>
        <nav>

            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar