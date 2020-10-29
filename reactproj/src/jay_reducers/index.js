import { combineReducers } from 'redux';

import podcasterDashboardInfoState from './podcasterDashboardInfoState';
import podcasterAudioListState from './podcasterAudioListState';

// 合併所有的reducers成一個大的reducer
export const rootReducer = combineReducers({
    podcasterDashboardInfoState,
    podcasterAudioListState,
});

