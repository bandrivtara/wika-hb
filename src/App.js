import React from 'react';
import './App.css';
import Main from './components/Main';
import Greeting from './components/Greeting';
import Cake from './components/Cake';
import Party from './components/Party';
import Present from './components/Present';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="rotateMobile">
          <p>Поверни телефон :)</p>
      </div>
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/greeting">
            <Greeting />
          </Route>
          <Route path="/cake">
            <Cake />
          </Route>
          <Route path="/present">
            <Present />
          </Route>
          <Route path="/party">
            <Party />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
