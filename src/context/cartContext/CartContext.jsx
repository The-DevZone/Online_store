import React, { createContext, useContext, useReducer } from 'react'
// import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker';
import { cartReducer } from './cartReducer';

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

  const products = [...Array(20)].map((product) => {
    return {
      id: faker.string.uuid(),
      productName: faker.commerce.productName(),
      productDescribtion: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 100, max: 5000 }),
      image: faker.image.urlPicsumPhotos({ width: 300, height: 400 }),
      inStock: faker.helpers.arrayElement([0, 5, 10, 20, 40]),
      fastDelivery: faker.datatype.boolean(),
      new: faker.datatype.boolean(),
      rating: faker.helpers.arrayElement([1, 2, 3, 4, 5])

    }
  })

  const [state, dispatch] = useReducer(cartReducer, {
    products,
  });

  return (
    <CartContext.Provider value={state} >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider")
  }
  return context
}

export { useCartContext, CartContextProvider };