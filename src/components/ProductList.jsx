import React from 'react'
import Product from './Product'
import Basket from './Basket'

const ProductList = ({products, basket, onProductSelected}) => {
    const productItems = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onProductSelected={onProductSelected}
          />
        )
    })

  return <>{productItems}
  <Basket basket={basket} />
  </>
}

export default ProductList