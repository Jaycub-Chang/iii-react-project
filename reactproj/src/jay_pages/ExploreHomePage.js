import './../jay_styles/ExploreHomePage.scss';
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
import {
  FaRegNewspaper,
  FaWalking,
  FaBook,
  FaSuitcase,
  FaGraduationCap,
} from 'react-icons/fa';
import { CgSmartphoneChip } from 'react-icons/cg';
import { GiPartyFlags, GiHealthNormal } from 'react-icons/gi';

function ExploreHomePage(props) {
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

  useEffect(() => {
    async function initialGetData() {
      await props.initalExploreHomePageAsync();
    }
    initialGetData();
  }, []);

  return (
    <StyleRoot>
      <div className="explorePageBody pt-4" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <li className="breadcrumb-item jay-now-page" aria-current="page">
                <RiMusic2Fill style={{ fontSize: '1.5rem' }} className="mx-1" />
                探索
              </li>
            </ol>
          </nav>
          <div className="jay-section-title-area py-2 px-3 col-2">
            <h5>探索分類</h5>
          </div>
          <div className="row d-flex mb-5">
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp01}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/pexels-sahidin-sahidin-2695975.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <FaRegNewspaper />
                  <h3 className=" text-center mt-1">新聞</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp02}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/board-22098_1920.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <CgSmartphoneChip />
                  <h3 className=" text-center mt-1">科技</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp03}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/sport.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <FaWalking />
                  <h3 className=" text-center mt-1">運動</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp04}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/pexels-teddy-2263410.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <GiPartyFlags />
                  <h3 className=" text-center mt-1">活動</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp05}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/story02.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <FaBook />
                  <h3 className=" text-center mt-1">故事</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp06}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/dices-over-newspaper-2656028_1920.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <FaSuitcase />
                  <h3 className=" text-center mt-1">商業</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp07}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/book-1822474_1920.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <FaGraduationCap />
                  <h3 className=" text-center mt-1">教育</h3>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-6 jay-cate-img-area py-3 position-relative"
              style={styles.fadeInUp08}
            >
              <a
                href="javascript"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <img
                  src="http://localhost:3000/images/explore_categories/salad-2756467_1920.jpg"
                  alt=""
                />
                <div className="position-absolute jay-cate-icon-layer">
                  <GiHealthNormal />
                  <h3 className=" text-center mt-1">健康</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="jay-section-title-area py-2 px-3 col-2 mb-5">
            <h5>熱門頻道排行</h5>
          </div>
          <div className="row d-flex">
            {props.popular_channel.map((item, index) => {
              if (index >= 5) {
                return <></>;
              }
              return (
                <div
                  className="col-12 col-lg d-flex position-relative jay-channel-rating-section1"
                  style={styles.fadeIn01}
                >
                  <div className="jay-channel-rating-number">
                    <img
                      src={require(`../jay_imgs_svgs/rating_number/${
                        index + 1
                      }.svg`)}
                      alt=""
                    />
                  </div>
                  <div className="jay-channel-rating-pic position-absolute">
                    <a
                      href="javascript"
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <img src={item.podcaster_img} alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row d-flex">
            {props.popular_channel.map((item, index) => {
              if (index < 5) {
                return <></>;
              }
              return (
                <a
                  href="javascript"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                  style={{
                    display: 'block',
                    zIndex: '100',
                    width: '20%',
                  }}
                >
                  <div className="col-6 col-lg d-flex jay-channel-rating-section2 py-3 px-3 mh14">
                    <div className="jay-section2-part1">
                      <div className="jay-number-circle-area position-relative">
                        <h6 className=" position-absolute">{index + 1}</h6>
                      </div>
                    </div>
                    <div className="jay-section2-part2">
                      <div className="jay-channel-rating-pic-part2">
                        <img src={item.podcaster_img} alt="" />
                      </div>
                    </div>
                    <div className="jay-section2-part3">
                      <h6>{item.channel_title}</h6>
                      <span>{item.channel_catagory}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

const mapStateToProps = (store) => {
  return { popular_channel: store.explorePopularChannel };
};

export default withRouter(
  connect(mapStateToProps, { initalExploreHomePageAsync })(ExploreHomePage)
);
