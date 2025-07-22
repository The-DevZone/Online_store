import React from 'react'
import ProductCard from './ProductCard'
import { useCartContext } from '../../../context/cartContext/CartContext'

const Body = () => {

    const { products } = useCartContext()


    return (
        // <div className='pt-10 items-center grid max-[900px]:grid-cols-1 max-[564px]:grid-cols-2 max-[425px]:grid-cols-1 max-[1130px]:grid-cols-2 grid-cols-3 gap-6'>
        //     {/* <div className='pt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 overflow-y-auto max-h-[90vh]'> */}
        //     {
        //         products.map((productDetails) => {
        //             return (
        //                 <ProductCard productDetails={productDetails} />
        //             )
        //         })
        //     }
        // </div>
        <div className='p-6 min-h-screen  flex justify-center items-center'>
            <div className=' w-full grid grid-cols-3 max-[1130px]:grid-cols-2 max-[900px]:grid-cols-1 max-[425px]:grid-cols-1 gap-6'>
                {
                    products.map((productDetails, index) => (
                        <ProductCard key={index} productDetails={productDetails} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body