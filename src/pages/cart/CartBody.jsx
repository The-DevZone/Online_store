import React, { useState } from 'react'
import CartProductCart from './CartProductCart'
import CartSubTotal from './CartSubTotal'
// import { useCartContext } from '../../context/cartContext/CartContext'

const CartBody = () => {

        const [quantities, setQuantities] = useState({});


    // Handle quantity increase
    const handleIncreaseCount = (productId) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: (prev[productId] || 1) + 1,
        }));
    };


    // Handle quantity decrease
    const handleDecreaseCount = (productId) => {
        setQuantities(prev => {
            const currentQty = prev[productId] || 1;
            return {
                ...prev,
                [productId]: currentQty > 1 ? currentQty - 1 : 1,
            };
        });
    };


    return (
        <div className='flex justify-between '>

            <CartProductCart  handleIncreaseCount={handleIncreaseCount} quantities={quantities}  handleDecreaseCount={handleDecreaseCount} />
            <CartSubTotal  quantities={quantities}     />
        </div>
    )
}

export default CartBody