import { INIT_PODCASTER_DASHBOARD, INIT_PODCASTER_AUDIO_LIST } from './actionTypes'



export const initalDashboard = (payload) => {
  return { type: INIT_PODCASTER_DASHBOARD, payload: payload }
};


export const initalDashboardAsync = (podcaster_id) => {
  return async function getChannelInfo(dispatch) {
    const url = `http://localhost:5566/podcaster_dashboard/channel_info/api/${podcaster_id}`;
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    console.log(data)

    //setTotal(data.total)
    // 最後得到資料，然後發送動作到reducer
    dispatch(initalDashboard(data[0]))

  };

};


export const initalAudioList = (payload) => {
  return { type: INIT_PODCASTER_AUDIO_LIST, payload: payload }
};


export const initalAudioListAsync = (podcaster_id) => {
  return async function getChannelAudioList(dispatch) {
    const url = `http://localhost:5566/podcaster_dashboard/channel_audio/api/${podcaster_id}`;
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    console.log(data)

    //setTotal(data.total)
    // 最後得到資料，然後發送動作到reducer
    dispatch(initalAudioList(data))
  };

};


