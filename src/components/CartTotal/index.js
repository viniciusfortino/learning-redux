import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/actions/cart';

const CartPrice = ({ cart, total, addProduct, setShipping }) => (
    <div className="item">
        <h1>Cart Total</h1>
        <p>
            Itens: <strong>{cart.items.length}</strong>
        </p>
        <p>
            Frete: <strong>{cart.shippingValue}</strong>
        </p>
        <p>
            Total:  <strong>{total}</strong>
        </p>
        <button onClick={() => addProduct()}>Add Product</button>
        <button onClick={() => setShipping()}>Calcular frete</button>
    </div>
);

const calculateTotal = (items) => {
    return items.reduce((subtotal, item) => subtotal + item.price, 0)
}

const mapStateToProps = ({ cart }) => ({
    cart,
    total: calculateTotal(cart.items)
})

const mapDispacthToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispacthToProps)(CartPrice)