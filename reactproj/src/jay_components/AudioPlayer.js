import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { withRouter } from 'react-router-dom'

// action、props
import { addAudioToPlaylistAndPlay } from '../jay_actions/index'

function AudioPlayer(props) {

    const [audioLists, setAudioLists] = useState([])

    useEffect(() => {
        // setAudioLists(props.audioPlayerList);
        console.log(props.audioPlayerList);
    }, []);

    useEffect(() => {
        // setAudioLists(props.audioPlayerList);
        console.log(props.audioPlayerList);
    }, [props.audioPlayerList]);

    return (
        <div style={{ height: '100px' }}>
            <ReactJkMusicPlayer
                mode={'full'}
                defaultVolume={0.6}
                autoPlay={false}
                defaultPosition={{ top: '80%', left: '90%' }}
                quietUpdate
                clearPriorAudioLists
                audioLists={audioLists}
            />
        </div>
    )
}

const mapStateToProps = (store) => {
    return { audioPlayerList: store.audioPlayerList }
}


export default withRouter(connect(mapStateToProps, { addAudioToPlaylistAndPlay })(AudioPlayer));
