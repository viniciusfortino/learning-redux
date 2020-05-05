import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import * as CartActions from '../../store/actions/cart';

const CartPrice = ({ cart, total, addProduct, setShipping }) => (
    <div className="item">
        <h1>Cart Total</h1>
        <p>
            Itens: <strong>{cart.items.length}</strong>
        </p>
        <p>
            Shipping Value: <strong>{cart.shippingValue}</strong>
        </p>
        <p>
            Total:  <strong>{total}</strong>
        </p>
        <button onClick={() => setShipping()}>Shipping Value calculator</button>
    </div>
);

/*
=== USING REDUX SELECTOR AND RESELECTOR ======

Without the createSelector, every state update, the calculateTotal function will load,
but when we use createSelector, it will only load when the state.items changes.

 const calculateTotal = (items) => {
    return items.reduce((subtotal, item) => subtotal + item.price, 0)
 }

So, uwe need to show to createSelector in the first function arg
    state => state.items,
and the second function arg is the function to calculate
    items => items.reduce((subtotal, item) => subtotal + item.price, 0) 

P.S.: We must pass all state to the function that will use createSelector

*/
const calculateTotal = createSelector(
    state => state.items,
    state => state.shippingValue,
    (items, shippingValue) => items.reduce((subtotal, item) => subtotal + item.price + shippingValue, 0)
);


const mapStateToProps = ({ cart }) => ({
    cart,
    total: calculateTotal(cart)
})

const mapDispacthToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispacthToProps)(CartPrice)