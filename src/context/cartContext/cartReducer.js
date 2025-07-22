import { useReducer } from 'react';



export const cartReducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return console.log("hellow")
    } else {
        return state
    }
}


// function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
//   throw Error('Unknown action.');
// }