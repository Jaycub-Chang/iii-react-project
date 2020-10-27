import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import 'react-jinke-music-player/assets/index.css'

// action、props
import { addAudioAsync,initalAudioListAsync } from '../jay_actions/index'
import { withRouter } from 'react-router-dom'

// bootstrap
import { Modal } from 'react-bootstrap';

function AudioEditModal(props) {

    const { setIsLoading } = props;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        await props.addAudioAsync(formData);
        await props.initalAudioListAsync(props.modalData.modalPodcasterId);
        props.onHide();
        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.modalData.modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="container" name="audioForm" onSubmit={handleSubmit}>
                        <input type="text" className="form-control" aria-describedby="emailHelp" value={props.modalData.modalPodcasterId} style={{ display: 'none' }} name="podcaster_id" />
                        <div className="form-group">
                            <h6>單集名稱：</h6>
                            <input type="text" className="form-control" aria-describedby="emailHelp" name="audio_title" />
                        </div>
                        <div className="form-group">
                            <h6>簡介</h6>
                            <textarea className="form-control" rows="2" name="audio_content_snippet" ></textarea>
                        </div>
                        <div class="form-group">
                            <h6>內容介紹</h6>
                            <textarea className="form-control" rows="5" name="audio_content" ></textarea>
                        </div>
                        <div class="form-group">
                            <h6>選擇音檔</h6>
                            <input type="file" class="form-control-file" name="audio_file" />
                        </div>
                        <Modal.Footer>
                            <button type="submit" className="btn btn-primary">確認送出</button>
                            <button onClick={props.onHide} className="btn-secondary btn">取消</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

const mapStateToProps = (store) => {
    return { channel_audio_data: store.podcasterAudioListState }
}


export default withRouter(connect(mapStateToProps, { addAudioAsync,initalAudioListAsync })(AudioEditModal));


