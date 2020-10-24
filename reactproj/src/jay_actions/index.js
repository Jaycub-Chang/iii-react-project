import { ADD_VALUE, MINUS_VALUE, INIT_VALUE, INIT_PODCASTER_DASHBOARD } from './actionTypes'

// action creator 動作建立器
export const addValue = (value) => {
  return { type: ADD_VALUE, value }
}



export const minusValue = (value) => {
  return { type: MINUS_VALUE, value }
}

// 初始化值的動作建立器
export const initValue = (value) => {
  return { type: INIT_VALUE, value }
}


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


