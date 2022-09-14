import React from 'react'

const Cart = ({ basket, basketTotal }) => {
  const basketItems = basket.map((product) => {
    return (
      <li key={product.id}>
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
