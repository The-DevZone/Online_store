import { useReducer } from 'react';



export const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        state = {
            ...state,
            cart: [...state.cart, action.payload]
        }
        return state
    }

    if (action.type === "REMOVE_FROM_CART") {
        // console.log("remove wala chal raha hu ma ")
        state = {
            ...state,
            
            cart: state.cart.filter(item => item.id !== action.payload.id)
        }
        return state
    }

    // if (action.type === "CART_REMOVE_FROM_CART") {
    //     state = {
    //         ...state,
    //         cart: state.cart.filter(item => item.id !== action.payload.id)
    //     }
    //     return state
    // }
}
