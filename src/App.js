import React from 'react';
import { Provider } from 'react-redux';

import store from './store'
import './styles.css'
import ProductStore from './components/ProductStore';
import Cart from './components/Cart';
import CartTotal from './components/CartTotal';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
