import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/home';
import store from './redux/store';
import NameForm from './pages/NameForm';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <h2>Formulaire d&apos;inscription</h2>
          <NameForm />
        </div>
      </Provider>
      <Home />
    </div>
  );
}

export default App;
