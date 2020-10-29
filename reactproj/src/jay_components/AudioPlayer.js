import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { withRouter } from 'react-router-dom'

// action、props
import { addAudioToPlaylistAndPlay } from '../jay_actions/index'

function AudioPlayer(props) {

    // 用redux改變的store不會更新元件，所以用上層傳參數
    const { globalAudioArry } = props;
    const [audioLists, setAudioLists] = useState([]);
    const [autoPlayState, setAutoPlayState] = useState(false);
    const [clearPriorAudioListsState, setClearPriorAudioListsState] = useState(true);

    // 馬上撥放
    useEffect(() => {
        setAudioLists(globalAudioArry);
        setAutoPlayState(true);
    }, [globalAudioArry])

    return (
        <div style={{ height: '100px' }}>
            <ReactJkMusicPlayer
                mode={'full'}
                defaultVolume={0.6}
                autoPlay={autoPlayState}
                defaultPosition={{ top: '80%', left: '90%' }}
                quietUpdate
                clearPriorAudioLists={clearPriorAudioListsState}
                audioLists={audioLists}
            />
        </div>
    )
}

const mapStateToProps = (store) => {
    return { audioPlayerList: store.audioPlayerList }
}


export default withRouter(connect(mapStateToProps, { addAudioToPlaylistAndPlay })(AudioPlayer));
