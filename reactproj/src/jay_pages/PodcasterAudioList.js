import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// action、props
import { initalAudioListAsync, delAudioAsync } from '../jay_actions/index'
import { withRouter, useParams } from 'react-router-dom'


// react icon 
import { FaTrash, FaEdit } from 'react-icons/fa';

// components
import AudioEditModal from './../jay_components/AudioEditModal';
import ScaleLoader from "react-spinners/ScaleLoader";

//css
import './../jay_styles/PodcasterAudioList.scss'
import { css } from "@emotion/core";


function PodcasterAudioList(props) {

    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalData, setModalData] = useState({});

    let { podcaster_id } = useParams();

    useEffect(async () => {
        setIsLoading(true);
        await props.initalAudioListAsync(podcaster_id);
        setTimeout(() => setIsLoading(false), 1000)
    }, []);


    const loader_css = css`
        display:inline-block;
    `;

    const displayAudioList = (
        <>
            <div className="container">
                <div className="row d-flex justify-content-around mt-3 align-items-center">
                    <div className="text-center">
                        <button className="btn btn-primary btn-sm" onClick={(e) => {
                            e.preventDefault();
                            setModalShow(true);
                            setModalData({
                                modalTitle: '新增單集',
                                modalPodcasterId: podcaster_id,
                            });
                        }}>單集上傳</button>
                    </div>
                    <div className="text-center d-flex justify-content-center align-items-stretch">
                        <input placeholder="單集關鍵字" className="search-input " />
                        <button className="btn btn-primary btn-sm search-btn" onClick={(e) => e.preventDefault()}>搜尋</button>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger btn-sm" onClick={(e) => e.preventDefault()}>多集刪除</button>
                    </div>
                </div>
                <div className="row justify-content-center custom-table-width">
                    <table className="table col-10 table-hover">
                        <thead>
                            <tr>
                                <th >序號</th>
                                <th >單集名稱</th>
                                <th >上傳日期</th>
                                <th >編輯</th>
                                <th >刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.channel_audio_data.map((item) =>
                                    <tr>
                                        <th scope="row">{item.sid}</th>
                                        <td>{item.audio_title}</td>
                                        <td>{item.pubDate}</td>
                                        <td className="icon"><a onClick={(e) => {
                                            e.preventDefault();
                                            setModalShow(true);
                                            setModalData({ modalTitle: '編輯單集' });
                                        }} href="javascript"><FaEdit /></a></td>
                                        <td className="icon"><a key={item.sid} onClick={(e) => {
                                            e.preventDefault();
                                            props.delAudioAsync(item.sid);
                                        }} href="javascript"><FaTrash /></a></td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            <AudioEditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalData={modalData}
                setIsLoading={setIsLoading}
            />
        </>
    );
    const displaySpinner = (
        <div className="spinnerArea">
            <ScaleLoader css={loader_css} color={"#4A90E2"} height={80} width={10} margin={6} radius={20} />
        </div>);


    return (isLoading) ? displaySpinner : displayAudioList;

}




const mapStateToProps = (store) => {
    return { channel_audio_data: store.podcasterAudioListState }
}

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue, addValueAsync }`是個物件值
export default withRouter(connect(mapStateToProps, { initalAudioListAsync, delAudioAsync })(PodcasterAudioList));

