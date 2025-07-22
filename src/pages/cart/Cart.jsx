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
// import { useCartContext } from '../../context/cartContext/CartContext'

const Cart = () => {
  // const { products } = useCartContext()
  // console.log("Cart:", products)

  return (
    <div>
      <h2>Cart Page</h2>
      {/* <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Cart
