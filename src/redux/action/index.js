import { GET_ADRESS,GET_WALLET, ADD_ADRESS } from "./types";
import axios from 'axios';

export const ROUT_GET_ADRESS= '/api/show';

export const ROUT_GET_WALLET= '/api/wallet';

export const ROUT_ADD_ADRESS= '/api/add';

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