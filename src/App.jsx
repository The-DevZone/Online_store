import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart"
// import {}
// import { useContext } from 'react';
// import { CartContext } from './context/cartContext/CartContext'
// import { useCartContext } from './context/cartContext/CartContext'
import Header from './components/header/Header';




const App = () => {

    // const { products } = useCartContext()
    // // const {products} = useContext(CartContext)
    // console.log(products)

    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
