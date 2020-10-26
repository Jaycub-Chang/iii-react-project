import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//components
import MyNavbar from './jay_components/MyNavbar.js';


//pages
import PodcasterDashboardHome from './jay_pages/PodcasterDashboardHome';
import AudioPlayer from './jay_components/AudioPlayer.js';
import PodcasterAudioList from './jay_pages/PodcasterAudioList.js';


function App() {
  return (
    <Router>
      <>

        <MyNavbar />
        <Switch>
          <Route exact path="/channel_info/:podcaster_id?">
            <PodcasterDashboardHome />
          </Route>
          <Route exact path="/channel_audio_list/:podcaster_id?">
            <PodcasterAudioList />
          </Route>
        </Switch>

        <AudioPlayer />
      </>
    </Router>
  );
}

export default App;
