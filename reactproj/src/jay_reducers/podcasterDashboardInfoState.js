import { INIT_PODCASTER_DASHBOARD } from '../jay_actions/actionTypes'

// action = { type: 'INIT_PODCASTER_DASHBOARD', payload: {...state} }

export default function podcasterDashboardInfoState(state = {
    sid: '',
    podcaster_id: '',
    channel_title: '',
    podcaster_img: '',
    podcaster_description: '',
    channel_catagory: '',
    owner_email: '',
    channel_summary: '',
    channel_subtitle: '',
    channel_rss_link: '',
    channel_rating: '',
    subscribe_number: '',
    subscribe_record: '',
    visitor_views: '',
    created_date: ''
}, action) {
    switch (action.type) {
        case INIT_PODCASTER_DASHBOARD:
            return action.payload;
        default:
            return state
    }
}
