import { INIT_PODCASTER_AUDIO_LIST, DEL_PODCASTER_AUDIO } from '../jay_actions/actionTypes'

// action = { type: 'INIT_PODCASTER_DASHBOARD', payload: {...state} }

export default function podcasterAudioListState(state = [], action) {
    switch (action.type) {
        case INIT_PODCASTER_AUDIO_LIST:
            return action.payload;
        default:
            return state
    }
}
