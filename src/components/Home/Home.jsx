import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getWallet,getAddress,getTransaction } from '../../redux/action';
 //components
 import Add from './Add';
import List from './List/List';
import Conversor from '../conversor/Conversor';



const Home = () => {
  const dispatch =useDispatch();
  const transaction= useSelector((tr)=> tr.value)
  
  const wallet = useSelector((st) => st.wallet)
  const adress= useSelector((add)=> add.adress)
  
  

  useEffect(()=>{
    dispatch(getTransaction())
    dispatch(getWallet())
    dispatch(getAddress())
  },[dispatch])


  return (
    <div>
      <center>
        <Conversor/>
      <Add/>
      <List/>
      {wallet ? 
        <p>Total: {wallet}</p>
    :
    <p>cargakndo</p>}

        <table>
          <thead>
        <tr>
          <th>Block</th>
          <th>From</th>
          <th>To</th>
          <th>Hash</th>
          <th>Value</th>
        </tr>
          </thead>
        

          {transaction ? transaction.map((tr,idx)=>(
            <tbody key={idx}>
            <tr >
              <td>{tr.blockNumber}</td>
              <td>{tr.from}</td>
              <td>{tr.to}</td>
              <td>{tr.hash}</td>
              <td>{tr.value}</td>
            </tr>
            </tbody>
          ))
        : null }
          </table>
          </center>
    </div>
  )
}

export default Home