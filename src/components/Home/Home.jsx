import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getWallet,getAddress,getTransaction } from '../../redux/action';
 //components
 import Add from './Add';
import AddList from './AddList/AddList';



const Home = () => {
  const dispatch =useDispatch();
  const transaction= useSelector((tr)=> tr.value)
  console.log(transaction,'transaction')
  const wallet = useSelector((st) => st.wallet)
  const adress= useSelector((add)=> add.adress)
  console.log(adress,'home adress')
  console.log(wallet,'home wallet')

  

  useEffect(()=>{
    dispatch(getTransaction())
    dispatch(getWallet())
    dispatch(getAddress())
  },[dispatch])


  return (
    <div>
      <AddList/>
      {wallet ? 
        <p>Total: {wallet}</p>
    :
    <p>no carga</p>}

        <table>
          <tr>
          <th>Block</th>
          <th>From</th>
          <th>To</th>
          <th>Hash</th>
          <th>Value</th>
          </tr>

          {transaction && transaction.map((tr,idx)=>(
            <tr key={idx}>
              <td>{tr.blockNumber}</td>
              <td>{tr.from}</td>
              <td>{tr.to}</td>
              <td>{tr.hash}</td>
              <td>{tr.value}</td>
            </tr>
          ))}
          </table>
    </div>
  )
}

export default Home