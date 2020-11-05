import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import MyNavbar from './jay_components/MyNavbar.js';
import ScrollToTop from './jay_components/ScrollToTop.js';

//pages
import PodcasterDashboardHome from './jay_pages/PodcasterDashboardHome';
import AudioPlayer from './jay_components/AudioPlayer.js';
import PodcasterAudioList from './jay_pages/PodcasterAudioList.js';
import ExploreHomePage from './jay_pages/ExploreHomePage.js';
import ExploreCateChannelPage from './jay_pages/ExploreCateChannelPage.js';
import ChannelPage from './jay_pages/ChannelPage.js';

function App() {
  const [globalAudioArry, setGlobalAudioArry] = useState([]);

  return (
    <Router>
      <>
        <MyNavbar />
        <ScrollToTop>
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
            <Route exact path="/explore/category/:cate_term">
              <ExploreCateChannelPage
                globalAudioArry={globalAudioArry}
                setGlobalAudioArry={setGlobalAudioArry}
              />
            </Route>
            <Route exact path="/channel_page/:cate_term/:podcaster_id">
              <ChannelPage
                globalAudioArry={globalAudioArry}
                setGlobalAudioArry={setGlobalAudioArry}
              />
            </Route>
          </Switch>
        </ScrollToTop>
        <AudioPlayer
          globalAudioArry={globalAudioArry}
          setGlobalAudioArry={setGlobalAudioArry}
        />
      </>
    </Router>
  );
}

export default App;
