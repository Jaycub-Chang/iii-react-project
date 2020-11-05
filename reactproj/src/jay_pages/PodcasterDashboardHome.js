import './../jay_styles/PodcasterDashboardHome.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// 改用動作類型的常數
//import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes'
// 導入actions/index.js中，這個元件只需要一部份的action creators
import { initalDashboardAsync } from '../jay_actions/index';
import { withRouter, useParams } from 'react-router-dom';

function PodcasterDashboardHome(props) {
  let { podcaster_id } = useParams();

  useEffect(() => {
    props.initalDashboardAsync(podcaster_id);
  }, []);

  return (
    <>
      {props.channel_data.map((item) => {
        return (
          <div className="container">
            <div className="row justify-content-center">
              <div className="jay-podcastImgArea my-3">
                <img src={item.podcaster_img} alt="" />
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary btn-sm">更換封面</button>
              </div>
            </div>
            <hr className="jay-dashboard-hr" />
            <div className="row justify-content-center custom-table-width">
              <table className="table col-10 jay-table">
                <tbody>
                  <tr>
                    <th scope="row">頻道編號</th>
                    <td>{item.podcaster_id}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">頻道名稱</th>
                    <td>{item.channel_title}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">簡介</th>
                    <td>{item.channel_summary}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">詳細內容</th>
                    <td>{item.podcaster_description}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">頻道類別</th>
                    <td>{item.channel_catagory}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">RSS連結</th>

                    <td>{item.channel_rss_link}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">聯絡信箱</th>
                    <td>{item.owner_email}</td>
                    <td>
                      <a href="#">編輯</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}

const mapStateToProps = (store) => {
  return { channel_data: store.podcasterDashboardInfoState };
};

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue, addValueAsync }`是個物件值
export default withRouter(
  connect(mapStateToProps, { initalDashboardAsync })(PodcasterDashboardHome)
);
