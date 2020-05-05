import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as StoreProductActions from '../../store/actions/storeProduct';

const ProductStore = ({ storeProduct, addToCart }) => (
    <div className="item">
        <h1>Product Store</h1>
        {
            storeProduct.map(productCategory => (
                <div key={productCategory.id}>
                    <h2>{productCategory.title}</h2>
                    <ul>
                        {productCategory.productsSubCategory.map(productSubCategory => (
                            <li key={productSubCategory.id}>
                                <strong>Name: </strong>{productSubCategory.title}
                                <strong>Price: </strong>{productSubCategory.price}
                                <button onClick={() => addToCart(productSubCategory)}>
                                    Add to Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
);

const mapStateToProps = ({ storeProduct }) => ({
    storeProduct
})

const mapDispacthToProps = dispatch =>
    bindActionCreators(StoreProductActions, dispatch);

export default connect(mapStateToProps, mapDispacthToProps)(ProductStore)