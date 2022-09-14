import React from 'react'

const Cart = ({ basket, basketTotal }) => {
  const basketItems = basket.map((product, index) => {
    return (
      <li key={index}>
        {product.name} - £ {product.price}
      </li>
    )
  })

  console.log(basketItems)

//   const basketTotal = basketItems.reduce((total, product) => {
//     return (total += product.price)
//   })

  
  return (
    <>
      <h2>Basket</h2>
      <ul>{basketItems}</ul>
      Total: £ {basketTotal}

    </>
  )
}

export default Cart
