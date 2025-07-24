import React from 'react'
import { IoMenu } from "react-icons/io5";
import FilterBar from '../../pages/home/filterbar/FilterBar';
import { useCartContext } from '../../context/cartContext/CartContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const { state: { cart } } = useCartContext()
    const navigate = useNavigate()
    const cartLength = cart.length

    const subTotal = cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
    const finalTotal = subTotal.toFixed(2)


    return (
        <div className=" flex justify-between navbar bg-base-100 shadow-sm shadow-white sticky top-0 z-[100] ">

            <div className="flex ">
                {/* menu icon start */}
                <div className="drawer min-[570px]:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label
                            htmlFor="my-drawer"
                            className="btn btn-outline btn-info btn-sm px-2"
                        >
                            <IoMenu className="text-xl" />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <FilterBar />
                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost text-xl" onClick={() => navigate("/")} >Store</a>

                {/* menu icon end */}
            </div>
            <div className="flex-none ">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle pr-6">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">{cartLength}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{cartLength} Items</span>
                            <span className="text-info"> subTotal : <span>&#8377;</span> {finalTotal}</span>
                            <div className="card-actions">
                                <button onClick={() => navigate("/cart")} className="btn btn-primary btn-block">  View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto " />
            </div>
        </div>
    )
}

export default Header