
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// 改用動作類型的常數
//import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes'
// 導入actions/index.js中，這個元件只需要一部份的action creators
import { initalDashboardAsync } from '../jay_actions/index'
import { withRouter, useParams } from 'react-router-dom'

function PodcasterDashboardHome(props) {

  let { podcaster_id } = useParams();

  useEffect(() => {
    props.initalDashboardAsync(podcaster_id);
  }, []);


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="podcastImgArea my-3">
          <img src={props.channel_data.podcaster_img} alt="" />
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-primary btn-sm">更換封面</button>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center custom-table-width">
        <table className="table col-10">
          <tbody>
            <tr>
              <th scope="row">頻道編號</th>
              <td >{props.channel_data.podcaster_id}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
            <tr>
              <th scope="row" >頻道名稱</th>
              <td >{props.channel_data.channel_title}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
            <tr>
              <th scope="row">簡介</th>
              <td >{props.channel_data.channel_summary}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
            <tr>
              <th scope="row" >詳細內容</th>
              <td >{props.channel_data.podcaster_description}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
            <tr>
              <th scope="row" >頻道類別</th>
              <td >{props.channel_data.channel_catagory}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
            <tr>
              <th scope="row" >RSS連結</th>

              <td >{props.channel_data.channel_rss_link}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
            <tr>
              <th scope="row" >聯絡信箱</th>
              <td >{props.channel_data.owner_email}</td>
              <td ><a href="#">編輯</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return { channel_data: store.setPodcasterDashboardInfoState }
}

// 原本的mapDispatchToProps
// const mapDispatchToProps = (dispatch) =>{
//   return { addValue, minusValue }
// }

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue, addValueAsync }`是個物件值
export default withRouter(connect(mapStateToProps, { initalDashboardAsync })(PodcasterDashboardHome));

