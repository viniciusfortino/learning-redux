import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as StoreProductActions from '../../store/actions/storeProduct';
class ProductStore extends Component {
    constructor(props) {
        super(props);
        props.fetchingData()
    }

    render() {
        const { storeProduct, addToCart } = this.props;
        return (
            <div className="item">
                <h1>Vehicles Product List</h1>
                <div>
                    {
                        storeProduct.productList.map(product => (
                            <div key={product.name}
                                style={{ borderBottom: "1px solid black" }}>
                                <p>Name: {product.name}</p>
                                <p>Model: {product.model}</p>
                                <p>Price: {product.cost_in_credits}</p>
                                <button onClick={() => addToCart(product)}>
                                    Add to Cart
                                    </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ storeProduct }) => ({
    storeProduct
})

const mapDispacthToProps = dispatch =>
    bindActionCreators(StoreProductActions, dispatch);

export default connect(mapStateToProps, mapDispacthToProps)(ProductStore)