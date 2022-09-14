import React from 'react'
import { Link } from 'react-router-dom'

const Basket = ({basket}) => {

    const basketItems = basket.map((product) => {
        return <li key={product.id}>{product.name}</li>

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