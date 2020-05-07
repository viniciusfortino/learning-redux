import React from 'react';
import { Provider } from 'react-redux';

import store from './store'
import './styles.css'
import ProductStore from './components/ProductStore';
import Cart from './components/Cart';
import CartTotal from './components/CartTotal';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Loading />
        <h1 style={{ textAlign: "center" }}>Star Wars Store</h1>
        <div className="container row">
          <ProductStore />
          <Cart />
          <CartTotal />
        </div>
      </Provider>
    </div>
  );
}

export default App;
