import axios from 'axios';
import {
    SAVE_ACCOUNT_BALANCE,
    SAVE_FINANCIAL_TRANSACTION,
    GET_NOTIFICATIONS
}
    from './types';


const url = "10.207.120.120";
const workflowPort = "9090";

//----------------------------------------------ACTION CREATORS START-----------------------------------------------------------------//

export function setAccountBalance(accBalance) {
    return { type: SAVE_ACCOUNT_BALANCE, payload: accBalance }
}

export function setFinancialTxn(txn) {
    return { type: SAVE_FINANCIAL_TRANSACTION, payload: txn }
}

export function getNotifications(notif) {
    return { type: GET_NOTIFICATIONS, payload: notif }
}

//----------------------------------------------ACTION CREATORS END------------------------------------------------------------------//

//----------------------------------------------MIDDLEWARE FUNCTION START-------------------------------------------------------------//

export const saveAccountBalance = (accBalance) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": 'http://localhost:3000/',
            "cross-origin": true,
            "Access-Control-Allow-Methods": 'OPTIONS'
        }
    };

    return async (dispatch) => {
        try {
            const response = await axios.post(`http://${url}:${workflowPort}/addBalance`, JSON.stringify(accBalance), config);
            dispatch(setAccountBalance(response));
        }
        catch (error) {
            console.log("Account Balance not added");
        }
    };
}

export const saveFinancialTransaction = (txn) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": 'http://localhost:3000/',
            "cross-origin": true,
            "Access-Control-Allow-Methods": 'OPTIONS'
        }
    };

    return async (dispatch) => {
        try {
            const response = await axios.post(`http://${url}:${workflowPort}/addFinancialTransaction`, JSON.stringify(txn), config);
            dispatch(setFinancialTxn(response));
        }
        catch (error) {
            console.log("Financial Txn not added");
        }
    };
}

export const fetchNotifications = () => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": 'http://localhost:3000/',
            "cross-origin": true,
            "Access-Control-Allow-Methods": 'OPTIONS'
        }
    };

    return async (dispatch) => {
        try {
            const response = await axios.get(`http://${url}:${workflowPort}/getNotification`, config);
            dispatch(getNotifications(response));
        }
        catch (error) {
            console.log("Notification not fetched");
        }
    };
}


//----------------------------------------------MIDDLEWARE FUNCTION END---------------------------------------------------------------//
