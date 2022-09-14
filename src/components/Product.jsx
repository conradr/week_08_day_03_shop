import React from 'react'

const Product = ({ product, onProductSelected }) => {
  const handleBuyClick = (e) => {
    onProductSelected(e.target.value)
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className='product-image' />
      <p>
        Price: <span>£ {product.price}</span>
      </p>
      <button
        className='buy-button'
        value={product.id}
        onClick={handleBuyClick}
      >
        Add to Basket
      </button>
    </div>
  )
}

export default Product
