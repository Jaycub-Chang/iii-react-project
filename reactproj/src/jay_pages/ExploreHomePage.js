import './../jay_styles/ExploreHomePage.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { initalDashboardAsync } from '../jay_actions/index';
import { withRouter } from 'react-router-dom';

//components
import Breadcrumb from 'react-bootstrap/Breadcrumb';

// react icon
import { RiMusic2Fill } from 'react-icons/ri';

function PodcasterDashboardHome(props) {
  return (
    <div className="explorePageBody py-4">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent">
            <li class="breadcrumb-item now-page" aria-current="page">
              <RiMusic2Fill style={{ fontSize: '1.5rem' }} className="mx-1" />
              探索
            </li>
          </ol>
        </nav>
        <div className="section-title-area py-2 px-3 col-2">
          <h5>探索分類</h5>
        </div>
        <div className="row d-flex ">
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/pexels-sahidin-sahidin-2695975.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/board-22098_1920.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/sport.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/pexels-teddy-2263410.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/story02.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/dices-over-newspaper-2656028_1920.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/book-1822474_1920.jpg" />
            </a>
          </div>
          <div className="col-md-3 col-6 cate-img-area py-3">
            <a
              href="javascript"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img src="http://localhost:3000/images/explore_categories/salad-2756467_1920.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { channel_data: store.podcasterDashboardInfoState };
};

export default withRouter(
  connect(mapStateToProps, { initalDashboardAsync })(PodcasterDashboardHome)
);
