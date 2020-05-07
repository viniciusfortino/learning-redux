export function addToCart(payload) {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export function fetchingData() {
    return {
        type: 'FETCHING_DATA_REQUEST'
    }
}
// export function addToCartResponse(productSubCategory) {
//     return {
//         type: 'ADD_TO_CART_RESPOSE',
//         productSubCategory
//     }
// }
// export function addToCartFailure(productSubCategory) {
//     return {
//         type: 'ADD_TO_CART_FAILURE',
//         productSubCategory
//     }
// }