import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useCartContext } from '../../../context/cartContext/CartContext'

const Body = () => {

    const { state: { products } } = useCartContext()
    // console.log(products)
    // console.log(cart)

    // useEffect(() => {
    //     dispatch({
    //         type: "INCREMENT",
    //         payload: "rohit"
    //     })
    // }, [])


    // const products = [];


    return (
        <div className='p-6 min-h-screen  flex justify-center items-center'>
            <div className=' w-full grid grid-cols-3 max-[1130px]:grid-cols-2 max-[900px]:grid-cols-1 max-[425px]:grid-cols-1 gap-6'>
                {
                    products.map((productDetails) => (
                        <ProductCard key={productDetails.id} productDetails={productDetails} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body