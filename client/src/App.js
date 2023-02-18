import React from 'react';
import './App.css';
import Toolbar from './toolbar/Toolbar';
import MyNavbar from './layout/MyNavbar';
import MyStage from './stage/MyStage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MyNavbar/>
      <Toolbar />
      <div id="sheet" className="container-fluid border">
        <MyStage/>
      </div>
    </Provider>
  );
}

export default App;
