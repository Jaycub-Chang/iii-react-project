import { ADD_AUDIO_TO_PLAYLIST_AND_PLAY } from '../jay_actions/actionTypes'

export default function audioPlayerList(state = [], action) {
    switch (action.type) {
        case ADD_AUDIO_TO_PLAYLIST_AND_PLAY:
            return state.push(action.payload);
        default:
            return state
    }
}


