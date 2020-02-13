import { combineReducers } from 'redux';
import accountBalanceReducer from './accountBalanceReducer';
import financialTransactionReducer from './financialTransaction';
import notificationReducer from './notificationReducer'

export default combineReducers({
    accountBalanceReducer,
    financialTransactionReducer,
    notificationReducer
});