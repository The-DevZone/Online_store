import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart"
import Header from './components/header/Header';
import { Toaster } from 'react-hot-toast';




const App = () => {
    return (
        <>
        <Toaster />
            <BrowserRouter>

                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
