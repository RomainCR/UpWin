import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import store from './redux/store';
import Lol from './pages/Lol';
import Wow from './pages/Wow';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route path="/Lol" component={Lol} />
          <Route path="/Wow" component={Wow} />
          <Route path="/Search" component={Search} />
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
