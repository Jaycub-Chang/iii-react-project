import { combineReducers } from 'redux';

import podcasterDashboardInfoState from './podcasterDashboardInfoState';
import podcasterAudioListState from './podcasterAudioListState';
import audioPlayerList from './audioPlayerList';

// 合併所有的reducers成一個大的reducer
export const rootReducer = combineReducers({
    audioPlayerList,
    podcasterDashboardInfoState,
    podcasterAudioListState,
});

