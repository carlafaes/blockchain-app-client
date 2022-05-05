import {GET_ADRESS,GET_WALLET, ADD_ADRESS} from '../action/types';

const initialState = {
    adress:[],
    wallet:[]
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ADRESS:
            return{
                ...state,
                adress:action.payload
            }
        default:
            return{
                state
            }
    }
}