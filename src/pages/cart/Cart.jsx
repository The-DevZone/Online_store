// import React from 'react'



// // import { useContext } from 'react';
// // import { CartContext } from '../../context/cartContext/CartContext'
// import { useCartContext } from '../../context/cartContext/CartContext'
// const Cart = () => {
//   const products  = useCartContext()
//   console.log(products)
//   return (
//     <div>{products}</div>
//   )
// }

// export default Cart


import React from 'react'
import CartBody from './CartBody'
// import { useCartContext } from '../../context/cartContext/CartContext'

const Cart = () => {
  // const { products } = useCartContext()
  // console.log("Cart:", products)

  return (
    <div className=''>
      <CartBody />
    </div>
  )
}

export default Cart
