import  style  from './Conversor.module.css';
import React,{useState} from 'react'
import { AiFillEuroCircle,AiFillDollarCircle } from 'react-icons/ai';


const Conversor = () => {
const  [val, setVal]=useState('')
const  [value, setValue]=useState('')
const tab = <>&nbsp;</>;

function getValue(e){
    setVal(()=>{
        return{
            [e.target.name]: e.target.value
        }
    })
}
function convertEur(e){
    e.preventDefault()
    setValue((Number(val.val) * 2538.81)).toFixed(1) 
    
}
function convertDol(e){
    e.preventDefault()
    setValue((Number(val.val) * 2785.18).toFixed(1))
}

  return (
    <div className={style.container}>
        <div className={style.cont_img_input}>
        <div className={style.input_}>
        <h3 className='title'>CONVERT</h3>
        <input
        type='number'
        id='cantidad'
        min='0'
        max='100000'
        name='val'
        placeholder='ETH'
        onChange={(e)=> getValue(e)}
        className='gral_input'
        />
        <div className={style.buttons}>
            <button className='close_btn' value='1' onClick={(e)=>convertEur(e)}><AiFillEuroCircle/>EUR</button>
            <button className='close_btn' value='2' onClick={(e)=>convertDol(e)}> <AiFillDollarCircle/>USD</button>
        </div>
        {value ?( 
        <p className='title'>RESULT: {value}</p>)
        : <p className='title'>RESULT: 0.00</p>}
        </div>
        </div>
       
    </div>
  )
}

export default Conversor