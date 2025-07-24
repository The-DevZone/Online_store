import React from 'react'

// import { useCartContext } from '../../context/cartContext/CartContext'

import Header from '../../components/header/Header'
import FilterBar from './filterbar/FilterBar'
import Body from './body/Body'


const Home = () => {

    return (
        <>

            <div className='flex justify-center '>
                <FilterBar />
                <Body />
            </div>
        </>

    )
}

export default Home