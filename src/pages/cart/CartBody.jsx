import React from 'react'
import CartProductCart from './CartProductCart'
import CartSubTotal from './CartSubTotal'
import { useCartContext } from '../../context/cartContext/CartContext'

const CartBody = () => {

    return (
        <div className='flex justify-between '>

            <CartProductCart   />
            <CartSubTotal />
        </div>
    )
}

export default CartBody