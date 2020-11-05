import './../jay_styles/ExploreCateChannelPage.scss';
import 'animate.css/animate.min.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { initalExploreCatePageAsync } from '../jay_actions/index';
import { withRouter, useParams } from 'react-router-dom';

//components
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

// react icon
import { RiMusic2Fill } from 'react-icons/ri';

function ChannelPage(props) {
  const styles = {
    fadeIn01: {
      animation: '2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
    fadeIn02: {
      animation: '2.5s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
  };

  const [isLoading, setIsLoading] = useState(false);
  const { cate_term } = useParams();
  const [breadcrumbCateTerm, setBreadcrumbCateTerm] = useState('');
  const transTermToChinese = () => {
    switch (cate_term) {
      case 'news':
        setBreadcrumbCateTerm('新聞');
        break;
      case 'society':
        setBreadcrumbCateTerm('故事');
        break;
      case 'education':
        setBreadcrumbCateTerm('教育');
        break;
      case 'health':
        setBreadcrumbCateTerm('健康');
        break;
      case 'sports':
        setBreadcrumbCateTerm('運動');
        break;
      case 'technology':
        setBreadcrumbCateTerm('科技');
        break;
      case 'business':
        setBreadcrumbCateTerm('商業');
        break;
      case 'entertainment':
        setBreadcrumbCateTerm('娛樂');
        break;
      default:
        setBreadcrumbCateTerm('無此');
    }
  };

  const imgUrlArray = [];

  function preLoadImgs() {
    props.cate_channels.forEach((item) => {
      imgUrlArray.push(item.podcaster_img);
    });
    let tempImgUrlArray = [];
    for (let i = 0; i < imgUrlArray.length; i++) {
      tempImgUrlArray[i] = new Image();
      tempImgUrlArray[i].src = imgUrlArray[i];
      // console.log(tempImgUrlArray);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => {
    //   setIsLoading(true);
    async function initialGetData() {
      transTermToChinese();
      // await props.initalExploreCatePageAsync(cate_term);
    }
    initialGetData();
  }, []);

  //   useEffect(() => {
  //     preLoadImgs();
  //   }, [props.cate_channels]);

  const displayCatePage = (
    <StyleRoot>
      <div className="explorePageBody pt-4" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <li
                className="breadcrumb-item jay-not-now-page"
                aria-current="page"
                onClick={() => {
                  props.history.push('/explore_home_page');
                }}
              >
                <RiMusic2Fill style={{ fontSize: '1.5rem' }} className="mx-1" />
                探索
              </li>
              <li
                className="breadcrumb-item jay-not-now-page"
                aria-current="page"
                onClick={() => {
                  props.history.push(`/explore/category/${cate_term}`);
                }}
              >
                {breadcrumbCateTerm}類
              </li>
              <li className="breadcrumb-item jay-now-page" aria-current="page">
                台灣通勤第一品牌
              </li>
            </ol>
          </nav>
          <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );

  const loader_css = css`
    display: inline-block;
  `;

  const displaySpinner = (
    <div className="jay-spinnerArea explorePageBody">
      <ScaleLoader
        css={loader_css}
        color={'#4A90E2'}
        height={80}
        width={10}
        margin={6}
        radius={20}
      />
    </div>
  );

  return isLoading ? displaySpinner : displayCatePage;
}

const mapStateToProps = (store) => {
  return { cate_channels: store.exploreCateChannel };
};

export default withRouter(
  connect(mapStateToProps, { initalExploreCatePageAsync })(ChannelPage)
);
