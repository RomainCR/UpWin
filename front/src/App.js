import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
