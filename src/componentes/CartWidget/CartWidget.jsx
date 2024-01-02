import React from 'react'
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
        <img className='ImgCart' src="./img/cart.png" alt="Carrito" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget