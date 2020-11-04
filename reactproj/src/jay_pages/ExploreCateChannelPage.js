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

function ExploreCateChannelPage(props) {
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
    setIsLoading(true);
    async function initialGetData() {
      transTermToChinese();
      await props.initalExploreCatePageAsync(cate_term);
    }
    initialGetData();
  }, []);

  useEffect(() => {
    preLoadImgs();
  }, [props.cate_channels]);

  const displayCatePage = (
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
                {breadcrumbCateTerm}類
              </li>
            </ol>
          </nav>
          <div className="row mt-4">
            <div className="col-3">
              <div className="jay-section-title-area py-2 px-3">
                <h5>{breadcrumbCateTerm}類熱門排行</h5>
              </div>
              <div className=" d-flex mt-4 jay-hot-list-toggle-area">
                <div className="px-3 py-2 jay-hot-list-toggle-btn">
                  <a
                    href="javascript"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <p>頻道</p>
                  </a>
                </div>
                <div className="px-3 py-2 jay-hot-list-toggle-btn">
                  <a
                    href="javascript"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <p>單集</p>
                  </a>
                </div>
              </div>
              <div className=" jay-hot-list-cate-channel">
                {props.cate_channels.map((item, index) => {
                  if (index > 8) {
                    return null;
                  }
                  return (
                    <div key={index} style={styles.fadeIn01}>
                      <a
                        className=" d-block w-100 jay-hot-list-cate-channel-btn pt-3 pb-2 mh14 px-3"
                        href="javascript"
                        onClick={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <div className="jay-border-line d-flex pb-2">
                          <div className="jay-hot-list-cate-channel-rank d-flex align-items-center">
                            <h4>{index + 1}</h4>
                          </div>
                          <div className="jay-hot-list-cate-channel-pic mx-3">
                            <img src={item.podcaster_img} alt="" />
                          </div>
                          <div className="jay-hot-list-cate-channel-info">
                            <h6>{item.channel_title}</h6>
                            <span>評分：{item.channel_rating}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-9">
              <hr className="jay-cate-hr" />
              <h4 className="cate-head-term py-3 px-5">{breadcrumbCateTerm}</h4>
              <div className="d-flex flex-wrap">
                {props.cate_channels.map((item, index) => {
                  return (
                    <div
                      className="col-6 col-md-3 cate-all-channel"
                      key={index}
                      style={styles.fadeIn02}
                    >
                      <a
                        className=" d-block"
                        href="javascript"
                        onClick={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <div className="cate-all-channel-pic">
                          <img src={item.podcaster_img} alt="" />
                        </div>
                        <p className="pt-2">{item.channel_title}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
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
  connect(mapStateToProps, { initalExploreCatePageAsync })(
    ExploreCateChannelPage
  )
);
