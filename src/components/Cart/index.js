import React from 'react';

import { connect } from 'react-redux';

const Cart = ({ cart }) => (
    <div className="item">
        <h1>My Cart</h1>
        <ul>
            {
                cart.items.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    </div >
)

const mapStateToProps = ({ cart }) => ({
    cart
})

export default connect(mapStateToProps)(Cart)