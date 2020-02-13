import {
    GET_NOTIFICATIONS
}
    from '../actions/types';

export const initialState = {

    getAllNotificationsResponse: ''

};

export default function notificationReducer(state = initialState, action) {

    if (action.type === GET_NOTIFICATIONS) {
        return Object.assign({}, state, {
            getAllNotificationsResponse: action.payload
        });
    }

    return state;
}