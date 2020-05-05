import { combineReducers } from 'redux';

import storeProduct from './storeProduct'
import cart from './cart'

export default combineReducers({
    storeProduct,
    cart
})