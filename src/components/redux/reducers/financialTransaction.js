import {
    SAVE_FINANCIAL_TRANSACTION
}
    from '../actions/types';

export const initialState = {

    saveFinancialTxnResponse: ''

};

export default function financialTransactionReducer(state = initialState, action) {

    if (action.type === SAVE_FINANCIAL_TRANSACTION) {
        return Object.assign({}, state, {
            saveFinancialTxnResponse: action.payload
        });
    }

    return state;
}