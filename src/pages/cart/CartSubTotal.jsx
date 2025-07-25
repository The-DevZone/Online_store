import React from 'react'
import { useCartContext } from '../../context/cartContext/CartContext'
import { useNavigate } from 'react-router-dom'

// const CartSubTotal = ({ finalTotal }) => {
//     const { state: { cart } } = useCartContext()
//     console.log(cart)
//     const cartLength = cart.length;
//     console.log(cartLength)

//     console.log(finalTotal)
//     const navigate = useNavigate()
//     return (


//             <div className="card-body">
//                 <span className="text-lg font-bold">{cartLength} Items</span>
//                 <span className="text-info"> SubTotal : <span>&#8377;</span> {finalTotal}</span>
//                 <div className="card-actions">
//                     <button onClick={() => navigate("/cart")} className="btn btn-primary btn-block">  View cart</button>
//                 </div>
//             </div>
//     )
// }



const CartSubTotal = ({ quantities = {} }) => {
    const { state: { cart } } = useCartContext()
    // const cartLength = cart.length;
    console.log(cart)
    const navigate = useNavigate()

    // 🧮 Calculate total items using quantities
    const totalItems = cart.reduce((acc, item) => {
        // console.log(item.id)
        const qty = quantities[item.id] || 1;
        return acc + qty;
    }, 0);

    // 🧾 Calculate subtotal using quantity * price
    const subTotal = cart.reduce((acc, item) => {
        const qty = quantities[item.id] || 1;
        return acc + qty * parseFloat(item.price);
    }, 0);
    return (
        <div className="card-body">
            <span className="text-lg font-bold">{totalItems} Items</span>
            <span className="text-success">
                SubTotal: <span>&#8377;</span> {subTotal.toFixed(2)}
            </span>
            <div className="card-actions">
                <button onClick={() => navigate("/cart")} className="btn btn-primary btn-block">
                    View cart
                </button>
            </div>
        </div>
    )
}

export default CartSubTotal