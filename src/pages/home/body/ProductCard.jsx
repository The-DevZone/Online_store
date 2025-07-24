import React from 'react'
// import { useCartContext } from '../../../context/cartContext/CartContext'
import { BsRocketTakeoffFill } from "react-icons/bs";
import Ratings from '../../../components/header/ratings/Ratings';
import { useCartContext } from '../../../context/cartContext/CartContext';

const ProductCard = ({ productDetails }) => {

    const { state: { cart }, dispatch } = useCartContext()
    
    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: productDetails
        })

    }
    const handleRemoveFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: productDetails
        })
    }

    return (
        <div className="card  w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  shadow-sm m-auto bg-gray-950 gap-3">
            {/* Responsive Image Grid Section */}
            <figure className="grid place-items-center p-2">
                <img
                    loading='lazy'
                    src={productDetails.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYL5T4L9EqKe2a3CK1jjRo29y23-0cwEkA&s"}
                    alt="Shoes"
                    className="aspect-square  w-full  h-[35vh] object-cover rounded-xl"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-base sm:text-lg md:text-xl">{productDetails.productName}</h2>
                    {productDetails.new && (
                        <div className="badge badge-outline badge-accent">New</div>
                    )}
                </div>
                <p className="min-h-[80px] text-sm sm:text-base ">
                    <span className='line-clamp-3'>{productDetails.productDescribtion} </span>
                </p>
                {/* Price */}
                {/* <p><strong>{productDetails.price}</strong> RS</p> */}
                <p><strong>{Number(productDetails.price).toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0
                })}</strong></p>

                {/* inStock */}
                <p>{productDetails.inStock}</p>
                {/* Ratiing */}
                <div><Ratings defaultRating={productDetails.rating} /></div>
                {/* fast delevery */}
                <div className=' '>
                    {
                        productDetails.fastDelivery ?
                            (<>
                                <p className='flex px-2'> FastDelivery <BsRocketTakeoffFill />  </p>
                                <span className='pr-4'>  </span>
                            </>
                            ) : (
                                <p className='text-red-50'>No Fastdelivery</p>

                            )}
                </div>
                {/*  */}



                <div className="card-actions flex justify-between ">
                    {
                        cart.some(p => p.id === productDetails.id) ? (
                            <button onClick={handleRemoveFromCart} className="btn btn-outline btn-secondary sm:w-auto">Remove From Cart</button>
                        ) : (
                            <button onClick={handleAddToCart} className="btn btn-outline btn-secondary sm:w-auto">Add to Cart</button>

                        )

                    }


                    <button className="btn btn-soft text-blue-400 sm:w-auto">Buy Now</button>
                </div>
            </div>
        </div>

    )

}

export default ProductCard