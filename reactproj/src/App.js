import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Counter from './jay_pages/counter'


function App() {
  return (
    <Router>
      <>


        <Switch>
          <Route exact path="/">
            <Counter id={1} />
          </Route>
        </Switch>


      </>
    </Router>
  );
}

export default App;
