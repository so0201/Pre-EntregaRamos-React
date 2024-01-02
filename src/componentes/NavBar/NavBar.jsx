import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda R2A</h1>
        <nav>
        <CartWidget/>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar