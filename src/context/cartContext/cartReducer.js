export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };

        case "INCREASE_QTY":
            const increaseQty = state.quantities[action.payload] || 1;
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [action.payload]: increaseQty + 1
                }
            };

        case "DECREASE_QUANTITY":
            const decreaseQty = state.quantities[action.payload] || 1;
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [action.payload]: decreaseQty > 1 ? decreaseQty - 1 : 1
                }
            };
        case "SUBTOTAL":
            const subtotal = state.cart.price[action.payload]
            
            return {
                ...state, 
                cart: {
                    ...state.cart,
                    [action.payload]: subtotal.cart.reduce((acc , curr) => acc + parseFloat(curr.price)  , 0)
                }
            }


        default:
            return state;  // very important: return current state by default
    }
};
