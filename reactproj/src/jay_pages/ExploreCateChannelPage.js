import './../jay_styles/ExploreCateChannelPage.scss';
import 'animate.css/animate.min.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { initalExploreHomePageAsync } from '../jay_actions/index';
import { withRouter } from 'react-router-dom';

//components
import { fadeInUp, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// react icon
import { RiMusic2Fill } from 'react-icons/ri';

function ExploreCateChannelPage(props) {
  const styles = {
    fadeInUp01: {
      animation: '2s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp02: {
      animation: '2.2s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp03: {
      animation: '2.4s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp04: {
      animation: '2.6s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp05: {
      animation: '2.8s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp06: {
      animation: '3s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp07: {
      animation: '3.2s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeInUp08: {
      animation: '3.4s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    },
    fadeIn01: {
      animation: '4s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
  };

  return (
    <StyleRoot>
      <div className="explorePageBody pt-4" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <li
                className="breadcrumb-item jay-not-now-page"
                aria-current="page"
              >
                <RiMusic2Fill style={{ fontSize: '1.5rem' }} className="mx-1" />
                探索
              </li>
              <li className="breadcrumb-item jay-now-page" aria-current="page">
                新聞類
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </StyleRoot>
  );
}

const mapStateToProps = (store) => {
  return { popular_channel: store.explorePopularChannel };
};

export default withRouter(
  connect(mapStateToProps, { initalExploreHomePageAsync })(
    ExploreCateChannelPage
  )
);
