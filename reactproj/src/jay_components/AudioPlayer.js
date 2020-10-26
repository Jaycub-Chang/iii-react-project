import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { withRouter } from 'react-router-dom'


function AudioPlayer(props) {

    const [audioLists, setAudioLists] = useState([{
        musicSrc: 'https://anchor.fm/s/1ea77470/podcast/play/21468976/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-9-22%2Fdae30029-65ee-c337-61ac-270765cdabf8.mp3',
        cover: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/5042908/5042908-1587973414327-b05dc3900bb48.jpg',
        name: 'EP49 自羽為高材生',
        singer: '台灣通勤第一品牌',
    }, {
        musicSrc: 'https://chtbl.com/track/37D3D8/rss.soundon.fm/rssf/b8f5a471-f4f7-4763-9678-65887beda63a/feedurl/34bc7c2c-ab4d-49f4-a117-f48de58a9c28/rssFileVip.mp3?timestamp=1603435255107',
        cover: 'https://storage.googleapis.com/gold-bruin-237907.appspot.com/1590032783606-f11c50ab-b5db-45d5-a6d1-969da850cfc3.jpg',
        name: '【投資好難】#24 特斯拉能飛多高 + 橡木資本最新備忘錄',
        singer: 'M觀點',
    }])


    return (
        <div style={{ height: '100px' }}>
            <ReactJkMusicPlayer
                mode={'full'}
                defaultVolume= {0.6}
                autoPlay={false}
                defaultPosition={{ top: '80%', left: '90%' }}
                quietUpdate
                clearPriorAudioLists
                audioLists={audioLists}
            />
        </div>
    )
}

//   const mapStateToProps = (store) => {
//     return { channel_data: store.setPodcasterDashboardInfoState }
//   }


// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue, addValueAsync }`是個物件值
export default withRouter(AudioPlayer);
