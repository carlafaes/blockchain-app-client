import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getWallet,getAddress,getTransaction } from '../../redux/action';


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
      {wallet ? 
        <p>Total: {wallet}</p>
    :
    <p>no carga</p>}
    
    {transaction && transaction.map((tr)=>(
      <div>
        <p>from: {tr.from}</p>
        <p>value:{tr.value}</p>
        <p>block number:{tr.blockNumber}</p>
        <p>Hash:{tr.hash}</p>
        <p>To:{tr.to}</p>
      </div>
    ))}
    </div>
  )
}

export default Home