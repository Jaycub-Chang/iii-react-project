import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//components
import MyNavbar from './jay_components/MyNavbar.js';

//pages
import PodcasterDashboardHome from './jay_pages/PodcasterDashboardHome';
import AudioPlayer from './jay_components/AudioPlayer.js';
import PodcasterAudioList from './jay_pages/PodcasterAudioList.js';
import ExploreHomePage from './jay_pages/ExploreHomePage.js';

function App() {
  const [globalAudioArry, setGlobalAudioArry] = useState([]);

  return (
    <Router>
      <>
        <MyNavbar />
        <Switch>
          <Route exact path="/channel_info/:podcaster_id?">
            <PodcasterDashboardHome />
          </Route>
          <Route exact path="/channel_audio_list/:podcaster_id?">
            <PodcasterAudioList
              globalAudioArry={globalAudioArry}
              setGlobalAudioArry={setGlobalAudioArry}
            />
          </Route>
          <Route exact path="/explore_home_page">
            <ExploreHomePage
              globalAudioArry={globalAudioArry}
              setGlobalAudioArry={setGlobalAudioArry}
            />
          </Route>
        </Switch>

        <AudioPlayer
          globalAudioArry={globalAudioArry}
          setGlobalAudioArry={setGlobalAudioArry}
        />
      </>
    </Router>
  );
}

export default App;
