import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//components
import MyNavbar from './jay_components/MyNavbar.js';


//pages
import PodcasterDashboardHome from './jay_pages/PodcasterDashboardHome';


function App() {
  return (
    <Router>
      <>

        <MyNavbar />
        <Switch>
          <Route exact path="/:podcaster_id?">
            <PodcasterDashboardHome />
          </Route>
        </Switch>


      </>
    </Router>
  );
}

export default App;
