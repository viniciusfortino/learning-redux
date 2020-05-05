export function addToCart(productSubCategory) {
    return {
        type: 'ADD_TO_CART',
        productSubCategory
    }
}