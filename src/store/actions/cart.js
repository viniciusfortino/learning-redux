export function addToCart(productSubCategory) {
    return {
        type: 'ADD_TO_CART',
        productSubCategory
    }
}
export function setShipping() {
    return {
        type: 'SET_SHIPPING'
    }
}