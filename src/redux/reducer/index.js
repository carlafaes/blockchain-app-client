import {
    GET_ADRESS,
    GET_WALLET, 
    ADD_ADRESS,
    GET_TRANSACTION}
     from '../action/types';

const initialState = {
    adress:[],
    wallet:{},
    value:[]
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ADRESS:
            return{
                ...state,
                adress:action.payload
            }
        case GET_WALLET:
            return{
                ...state,
                wallet:action.payload
            }
        case GET_TRANSACTION:
            return{
                ...state,
                value:action.payload
            }
        default:
            return{
                state
            }
    }
}