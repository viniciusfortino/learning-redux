import INITIAL_STATE from '../initialState';

export default function storeProduct(state = INITIAL_STATE, action) {
    console.log(state)
    switch (action.type) {
        case 'FETCHED_DATA_SUCCESS':
            console.log("action.payload", action.payload)
            console.log("action.payload", action.payload.length)
            return {
                ...state,
                productList: [...action.payload]
            }
        default:
            return state;
    }
}