import INITIAL_STATE from '../initialState';

//function that returns the current state
//when is the first time the reducers run, we need to pass to it the inicital state 
export default function cart(state = INITIAL_STATE.cart, action) {
    console.log("response", action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case 'ADD_TO_CART_FAILURE':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.productSubCategory
                ]
            }
        case 'SET_SHIPPING':
            return {
                ...state,
                shippingValue: Math.floor(Math.random() * 100 + 1)
            }
        default:
            return state;
    }
}