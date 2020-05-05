import React from 'react';
import { Provider } from 'react-redux';

import store from './store'
import SideBar from './components/SideBar';
import VideoContainer from './components/VideoContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SideBar />
        <VideoContainer />
      </Provider>
    </div>
  );
}

export default App;
