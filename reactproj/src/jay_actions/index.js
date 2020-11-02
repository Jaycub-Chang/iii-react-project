import {
  INIT_PODCASTER_DASHBOARD,
  INIT_PODCASTER_AUDIO_LIST,
} from './actionTypes';

export const initalDashboard = (payload) => {
  return { type: INIT_PODCASTER_DASHBOARD, payload: payload };
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
    });

    const response = await fetch(request);
    const data = await response.json();

    dispatch(initalDashboard(data[0]));
  };
};

export const initalAudioList = (payload) => {
  return { type: INIT_PODCASTER_AUDIO_LIST, payload: payload };
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
    });

    const response = await fetch(request);
    const data = await response.json();

    dispatch(initalAudioList(data));
  };
};

// 新增音檔
export const addAudioAsync = (formData) => {
  return async function addAudioSubmit(dispatch) {
    const url = `http://localhost:5566/podcaster_dashboard/channel_audio/add/api`;
    const request = new Request(url, {
      method: 'POST',
      body: formData,
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
  };
};

// 刪除音檔
export const delAudioAsync = (audioSid) => {
  return async function addAudioSubmit(dispatch, getState) {
    const url = `http://localhost:5566/podcaster_dashboard/channel_audio/delete/api/${audioSid}`;
    const request = new Request(url, {
      method: 'GET',
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    let newState = getState().podcasterAudioListState.filter(
      (item) => item.sid !== audioSid
    );

    dispatch(initalAudioList(newState));
  };
};

// 修改音檔
export const editAudioAsync = (formData) => {
  return async function addAudioSubmit(dispatch) {
    const url = `http://localhost:5566/podcaster_dashboard/channel_audio/edit/api`;
    const request = new Request(url, {
      method: 'POST',
      body: formData,
    });

    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    console.log(data);
  };
};
