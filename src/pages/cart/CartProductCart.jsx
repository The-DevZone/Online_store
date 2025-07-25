import React, { useState } from 'react';
import { useCartContext } from '../../context/cartContext/CartContext';
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';

const CartProductCart = ({ handleIncreaseCount, quantities, handleDecreaseCount }) => {
    const { state: { cart }, dispatch } = useCartContext();
    console.log(cart)
    // console.log(cart)

    // Store quantity per product using product.id as key




    // Remove item from cart
    const handleCartItemRemove = (product) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
        });
    };


    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (id) => {
        setHoveredProductId(id);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        setMousePos({ x, y });
    };

    return (
        <>
            {cart.length <= 0 ? (
                <div className="text-center flex justify-center items-center h-screen text-yellow-300 text-lg py-6 animate-shake">
                    Oops! Looks like you haven't added anything to your cart yet. 🛒
                </div>
            ) : (
                cart.map((product) => {
                    const qty = quantities[product.id] || 1;
                    const totalPrice = Number(product.price) * qty;

                    return (
                        <div key={product.id} className="card w-full max-w-md shadow-sm m-auto bg-gray-950 gap-3 mt-6">
                            {/* Product Image */}

                            <div
                                onMouseEnter={() => handleMouseEnter(product.id)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                className="border p-4 rounded-md bg-white shadow-md"
                            >
                                <figure className="overflow-hidden rounded-md h-[200px]">
                                    <img
                                        src={product.image}
                                        alt="product"
                                        className="object-cover w-full h-full"
                                    />
                                </figure>
                                <h2 className="mt-2 font-semibold text-gray-800">
                                    {product.title}
                                </h2>
                            </div>

                            {/* Zoomed Image Preview */}
                            {hoveredProductId === product.id && (
                                <div className="absolute top-0 left-[400px] w-[600px] h-[600px] border bg-white shadow-lg overflow-hidden z-50">
                                    <img
                                        src={product.image}
                                        alt="zoom"
                                        className="w-full h-full object-cover scale-125"
                                        style={{
                                            transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
                                        }}
                                    />
                                </div>
                            )}



                            {/* Product Details */}
                            <div className="card-body">
                                {/* Price + Quantity Controls */}
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-bold text-white">
                                        {totalPrice.toLocaleString('en-IN', {
                                            style: 'currency',
                                            currency: 'INR',
                                            maximumFractionDigits: 0,
                                        })}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <CiCircleMinus
                                            onClick={() => {
                                                if (qty === 1) {
                                                    toast.error("Minimum quantity is 1");
                                                    return;
                                                }
                                                handleDecreaseCount(product.id);
                                            }}
                                            className={`cursor-pointer text-red-500 text-2xl ${qty === 1 ? " opacity-50" : ""}`}
                                        />
                                        <span className="px-2 text-white">{qty}</span>
                                        <CiCirclePlus
                                            onClick={() => {
                                                // if (qty >= 5) {
                                                //     toast.error("Maximum quantity reached");
                                                //     return;
                                                // }

                                                if (qty >= 5) {
                                                    toast.error("Max 5 items allowed!", {
                                                        duration: 3000,
                                                        icon: "🚫",
                                                        id: "max-limit",
                                                    });
                                                    return;
                                                }
                                                handleIncreaseCount(product.id);
                                            }}
                                            className={`cursor-pointer text-green-500 text-2xl ${qty >= 5 ? " opacity-50" : ""}`}
                                        />
                                    </div>
                                </div>

                                {/* Stock Status */}
                                <p className="text-white">{product.inStock}</p>

                                {/* Delivery Info */}
                                <div>
                                    {product.fastDelivery ? (
                                        <p className="flex items-center text-green-400">
                                            Fast Delivery <BsRocketTakeoffFill className="ml-2" />
                                        </p>
                                    ) : (
                                        <p className="text-red-400">No Fast Delivery</p>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="card-actions flex justify-between pt-4">
                                    <button
                                        onClick={() => handleCartItemRemove(product)}
                                        className="btn btn-outline btn-secondary"
                                    >
                                        Remove From Cart
                                    </button>

                                    <button className="btn btn-soft text-blue-400">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </>
    );
};

export default CartProductCart;
