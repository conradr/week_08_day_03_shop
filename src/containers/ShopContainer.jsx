import React, { useState } from 'react'
import Basket from '../components/Basket'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const ShopContainer = () => {
  const productsData = [
    {
      id: 1,
      name: 'Sonic Frontiers',
      description:
        'Worlds are colliding in Sonic the Hedgehogs newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. ',
      release_date: '2022',
      image:
        'https://cdn.game.net/image/upload/b_rgb:FFFFFF,c_pad,dpr_auto,f_auto,h_714,q_auto,w_1000/c_pad,h_714,w_1000/v1/game_img/ml2/8/1/4/3/814350_gen_a?pgw=1&pgwact=1',
      price: 56,
      platform: 'Switch',
      inBasket: false,
    },
    {
      id: 2,
      name: 'Animal Crossing New Horizons',
      description:
        'Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be.',
      release_date: '2020',
      image:
        'https://cdn.game.net/image/upload/b_rgb:FFFFFF,c_pad,dpr_auto,f_auto,h_714,q_auto,w_1000/c_pad,h_714,w_1000/v1/game_img/ml2/7/3/6/7/736752_gen_a?pgw=1&pgwact=1',
      price: 45,
      platform: 'Switch',
      inBasket: false,
    },
    {
      id: 3,
      name: 'Mario Kart',
      description:
        'With Nintendo Switch, fans can enjoy the definitive version of Mario Kart 8 anytime, anywhere with anyone. Bursting with new modes, characters, karts and fan favourite tracks',
      release_date: '2020',
      image:
        'https://cdn.game.net/image/upload/b_rgb:FFFFFF,c_pad,dpr_auto,f_auto,h_714,q_auto,w_1000/c_pad,h_714,w_1000/v1/game_img/ml2/6/5/5/8/655846_gen_a?pgw=1&pgwact=1',
      price: 40,
      platform: 'Switch',
      inBasket: false,
    },
  ]
  const [products, setProducts] = useState(productsData)
  const [basket, setBasket] = useState([])


  let selectedProduct
  const handleProductSelected = (productId) => {
    selectedProduct = products.find(
      (product) => product.id === Number(productId)
    )
    setBasket([...basket, selectedProduct])
  } 

 const basketTotal = basket.reduce((total, product) => {
    return (total += product.price)
  }, 0)

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProductList
              products={products} basket={basket}
              onProductSelected={handleProductSelected}
            />
          }
        />
        <Route path='/cart' element={<Cart basket={basket} basketTotal={basketTotal}/>} />
      </Routes>
    </Router>
  )
}

export default ShopContainer
