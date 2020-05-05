import INITIAL_STATE from '../initialState';

export default function storeProduct(state = INITIAL_STATE.productsCategory, action) {
    console.log(state)
    switch (action.type) {
        default:
            return state;
    }
}