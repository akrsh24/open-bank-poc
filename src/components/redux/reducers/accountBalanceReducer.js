import {
    SAVE_ACCOUNT_BALANCE
}
    from '../actions/types';

export const initialState = {

    saveAccountBalanceResponse: ''

};

export default function accountBalanceReducer(state = initialState, action) {

    if (action.type === SAVE_ACCOUNT_BALANCE) {
        return Object.assign({}, state, {
            saveAccountBalanceResponse: action.payload
        });
    }

    return state;
}