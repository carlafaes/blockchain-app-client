import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getWallet,getAddress,getTransaction } from '../../redux/action';
import style from './Home.module.css'
import { FaWallet,FaEthereum } from 'react-icons/fa';

 //components
import List from './List/List';
import Conversor from '../conversor/Conversor';



const Home = () => {
  const dispatch =useDispatch();
  const transaction= useSelector((tr)=> tr.value)
  const tab = <>&nbsp;</>;
  const wallet = useSelector((st) => st.wallet)
  const adress= useSelector((add)=> add.adress)
  
  

  useEffect(()=>{
    dispatch(getTransaction())
    dispatch(getWallet())
    dispatch(getAddress())
  },[dispatch])


  return (
    <div  className={style.container_g}>
      <center>
        <div className={style.container_g2}>
          <div className={style.wallet}>
          {wallet ? 
          <div className={style.balance_}>
            <p><FaWallet/> {tab} AVALAIBLE BALANCE: </p>
            {tab}
            <p> {wallet} <FaEthereum/>ETH</p>
          </div>
            :
            <p>Loading</p>}
          </div>

        <Conversor/>
        </div>
        <div className={style.comp}>
        <List/>
        </div>
        <table className={style.tab_}>
          <thead> 
        <tr className={style.tr_}>
          <th className={style.th_}>From</th>
          <th className={style.th_}>Block</th>
          <th className={style.th_}>To</th>
          <th className={style.th_}>Hash</th>
          <th className={style.th_}>Value</th>
        </tr>
          </thead>
        

          {transaction ? transaction.map((tr,idx)=>(
            <tbody key={idx} >
            <tr  className={style.tr_}>
              <td className={style.td_}>{tr.blockNumber}</td>
              <td className={style.td_}>{tr.from}</td>
              <td className={style.td_}>{tr.to}</td>
              <td className={style.td_}>{tr.hash}</td>
              <td className={style.td_}>{tr.value}</td>
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