import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
