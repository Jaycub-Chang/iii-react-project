import { combineReducers } from 'redux';

import counter from './counter.js';
import setPodcasterDashboardInfoState from './setPodcasterDashboardInfoState';

// 合併所有的reducers成一個大的reducer
export const rootReducer = combineReducers({
    counter,
    setPodcasterDashboardInfoState,
});

