import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import 'react-jinke-music-player/assets/index.css'
import { withRouter } from 'react-router-dom'

// bootstrap
import { Modal, Button } from 'react-bootstrap';

function AudioEditModal(props) {
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
                    <form className="container">
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={props.modalData.modalPodcasterId} style={{ display: 'none' }} />
                        <div className="form-group">
                            <h6>單集名稱：</h6>
                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <h6>簡介</h6>
                            <textarea className="form-control" rows="2"></textarea>
                        </div>
                        <div class="form-group">
                            <h6>內容介紹</h6>
                            <textarea className="form-control" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <h6>選擇音檔</h6>
                            <input type="file" class="form-control-file" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>確認送出</Button>
                    <Button onClick={props.onHide} className="btn-secondary">取消</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

// 綁定部份action creators
// 注意：第二個傳入參數` {addValue, minusValue, addValueAsync}`是個物件值
export default withRouter(AudioEditModal);