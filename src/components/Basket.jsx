import React from 'react'
import { Link } from 'react-router-dom'

const Basket = ({basket}) => {

    const basketItems = basket.map((product, index) => {
        return <li key={index}>{product.name}</li>

    })
  return (
    <>
      <h2>Basket</h2>
      <ul>{basketItems}</ul>
      <Link to="/cart" >Checkout</Link>
    </>
  )
}

export default Basket