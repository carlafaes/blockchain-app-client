import { GET_ADRESS,GET_WALLET, ADD_ADRESS,GET_TRANSACTION } from "./types";
import axios from 'axios';

export const ROUT_GET_ADRESS= 'http://localhost:5000/api/show';

export const ROUT_GET_WALLET= 'http://localhost:5000/api/wall';

export const ROUT_GET_TRANSACTION= 'http://localhost:5000/api/transaction';

export const ROUT_ADD_ADRESS= 'http://localhost:5000/api/add';

export function getAddress(){
    return async(dispatch)=>{
        let adress= await axios.get(ROUT_GET_ADRESS);
        let data= adress.data;
        
        return dispatch({
            type:GET_ADRESS,
            payload:data
        })
    }
}

export function getTransaction(){
    return async(dispatch)=>{
        let adress= await axios.get(ROUT_GET_TRANSACTION);
        let data= adress.data;

        return dispatch({
            type:GET_TRANSACTION,
            payload:data
        })
    }
}

export function getWallet(){
    return async(dispatch)=>{
        let wallet= await axios.get(ROUT_GET_WALLET);
        let data= wallet.data;

        return dispatch({
            type:GET_WALLET,
            payload:data
        })
    }
}

export function addAdress(payload){
    return async function(){
        const created= await axios.post(ROUT_ADD_ADRESS,payload);
        return created.data;
    } 
}

export const addAdressType = () => ({type: ADD_ADRESS})
