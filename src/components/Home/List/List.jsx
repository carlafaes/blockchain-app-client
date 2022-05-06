import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
  
    useEffect(()=>{
        dispatch(getAddress())
    },[])



  return (
    <div>
        <table>
            <thead>Adress</thead>
            {adressTotal && adressTotal.map((ad,idx)=>(
                <tbody key={idx}>
                    <tr>{ad.adress}</tr>
                    <button >Fav</button>
                </tbody>
            ))}
        </table>
    </div>
  )
}

export default List