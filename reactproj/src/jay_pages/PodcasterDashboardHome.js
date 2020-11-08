import './../jay_styles/PodcasterDashboardHome.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initalDashboardAsync, editChannelAsync } from '../jay_actions/index';
import { withRouter, useParams } from 'react-router-dom';

function PodcasterDashboardHome(props) {
  const { channel_data } = props;
  let { podcaster_id } = useParams();
  const [editTargrt, setEditTargrt] = useState('');
  const [editInputData, setEditInputData] = useState({});

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('podcaster_id', editInputData.podcaster_id);
    formData.append('channel_title', editInputData.channel_title);
    formData.append('channel_summary', editInputData.channel_summary);
    formData.append(
      'podcaster_description',
      editInputData.podcaster_description
    );
    formData.append('channel_catagory', editInputData.channel_catagory);
    formData.append('channel_rss_link', editInputData.channel_rss_link);
    formData.append('owner_email', editInputData.owner_email);
    formData.append('podcaster_img', editInputData.podcaster_img);
    await props.editChannelAsync(formData);
    await props.initalDashboardAsync(podcaster_id);
  };

  useEffect(() => {
    props.initalDashboardAsync(podcaster_id);
  }, []);
  useEffect(() => {
    setEditInputData(...channel_data);
  }, [channel_data]);

  return (
    <>
      {props.channel_data.map((item, index) => {
        return (
          <div className="container" key={index}>
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
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">頻道名稱</th>
                    {editTargrt === 'edit_channel_title' ? (
                      <>
                        <td>
                          <input
                            className="form-control"
                            value={editInputData.channel_title}
                            onChange={(event) => {
                              let copyData = { ...editInputData };
                              copyData.channel_title = event.target.value;
                              setEditInputData(copyData);
                            }}
                          />
                        </td>
                        <td>
                          <a
                            className=" text-info"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              handleSubmit();
                            }}
                          >
                            確認
                          </a>
                          <br />
                          <br />
                          <a
                            className=" text-danger"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              let copyData = { ...editInputData };
                              copyData.channel_title = item.channel_title;
                              setEditInputData(copyData);
                            }}
                          >
                            取消
                          </a>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.channel_title}</td>
                        <td>
                          <a
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('edit_channel_title');
                            }}
                          >
                            編輯
                          </a>
                        </td>
                      </>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">簡介</th>
                    {editTargrt === 'edit_channel_summary' ? (
                      <>
                        <td>
                          <textarea
                            className="form-control"
                            value={editInputData.channel_summary}
                            onChange={(event) => {
                              let copyData = { ...editInputData };
                              copyData.channel_summary = event.target.value;
                              setEditInputData(copyData);
                            }}
                          />
                        </td>
                        <td>
                          <a
                            className=" text-info"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              handleSubmit();
                            }}
                          >
                            確認
                          </a>
                          <br />
                          <br />
                          <a
                            className=" text-danger"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              let copyData = { ...editInputData };
                              copyData.channel_summary = item.channel_summary;
                              setEditInputData(copyData);
                            }}
                          >
                            取消
                          </a>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.channel_summary}</td>
                        <td>
                          <a
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('edit_channel_summary');
                            }}
                          >
                            編輯
                          </a>
                        </td>
                      </>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">詳細內容</th>
                    {editTargrt === 'edit_podcaster_description' ? (
                      <>
                        <td>
                          <textarea
                            className="form-control"
                            value={editInputData.podcaster_description}
                            onChange={(event) => {
                              let copyData = { ...editInputData };
                              copyData.podcaster_description =
                                event.target.value;
                              setEditInputData(copyData);
                            }}
                          />
                        </td>
                        <td>
                          <a
                            className=" text-info"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              handleSubmit();
                            }}
                          >
                            確認
                          </a>
                          <br />
                          <br />
                          <a
                            className=" text-danger"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              let copyData = { ...editInputData };
                              copyData.podcaster_description =
                                item.podcaster_description;
                              setEditInputData(copyData);
                            }}
                          >
                            取消
                          </a>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.podcaster_description}</td>
                        <td>
                          <a
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('edit_podcaster_description');
                            }}
                          >
                            編輯
                          </a>
                        </td>
                      </>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">頻道類別</th>
                    <td>{item.channel_catagory}</td>
                    <td>
                      <a
                        href="javascript"
                        onClick={(event) => {
                          event.preventDefault();
                          setEditTargrt('edit_channel_catagory');
                        }}
                      >
                        編輯
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">RSS連結</th>
                    {editTargrt === 'edit_channel_rss_link' ? (
                      <>
                        <td>
                          <textarea
                            className="form-control"
                            value={editInputData.channel_rss_link}
                            onChange={(event) => {
                              let copyData = { ...editInputData };
                              copyData.channel_rss_link = event.target.value;
                              setEditInputData(copyData);
                            }}
                          />
                        </td>
                        <td>
                          <a
                            className=" text-info"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              handleSubmit();
                            }}
                          >
                            確認
                          </a>
                          <br />
                          <br />
                          <a
                            className=" text-danger"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              let copyData = { ...editInputData };
                              copyData.channel_rss_link = item.channel_rss_link;
                              setEditInputData(copyData);
                            }}
                          >
                            取消
                          </a>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.channel_rss_link}</td>
                        <td>
                          <a
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('edit_channel_rss_link');
                            }}
                          >
                            編輯
                          </a>
                        </td>
                      </>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">聯絡信箱</th>
                    {editTargrt === 'edit_owner_email' ? (
                      <>
                        <td>
                          <textarea
                            className="form-control"
                            value={editInputData.owner_email}
                            onChange={(event) => {
                              let copyData = { ...editInputData };
                              copyData.owner_email = event.target.value;
                              setEditInputData(copyData);
                            }}
                          />
                        </td>
                        <td>
                          <a
                            className=" text-info"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              handleSubmit();
                            }}
                          >
                            確認
                          </a>
                          <br />
                          <br />
                          <a
                            className=" text-danger"
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('');
                              let copyData = { ...editInputData };
                              copyData.owner_email = item.owner_email;
                              setEditInputData(copyData);
                            }}
                          >
                            取消
                          </a>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.owner_email}</td>
                        <td>
                          <a
                            href="javascript"
                            onClick={(event) => {
                              event.preventDefault();
                              setEditTargrt('edit_owner_email');
                            }}
                          >
                            編輯
                          </a>
                        </td>
                      </>
                    )}
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
  connect(mapStateToProps, { initalDashboardAsync, editChannelAsync })(
    PodcasterDashboardHome
  )
);
