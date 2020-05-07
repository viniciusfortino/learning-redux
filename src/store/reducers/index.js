import { combineReducers } from 'redux';

import storeProduct from './storeProduct'
import cart from './cart'
import loading from './loading'

export default combineReducers({
    storeProduct,
    cart,
    loading
})