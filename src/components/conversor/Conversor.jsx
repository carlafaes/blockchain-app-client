import  style  from './Conversor.module.css';
import React,{useState} from 'react'

const Conversor = () => {
const  [val, setVal]=useState('')
const  [value, setValue]=useState('')
console.log(val,'val')
console.log(value,'value')

function getValue(e){
    setVal(()=>{
        return{
            [e.target.name]: e.target.value
        }
    })
    console.log(val,'eur')
}
function convertEur(e){
    e.preventDefault()
    setValue((Number(val.val) * 2538.81)).toFixed(1) 
    console.log('me ejecute euro')
}
function convertDol(e){
    e.preventDefault()
    setValue((Number(val.val) * 2785.18).toFixed(1))
    
  
}

  return (
    <div className={style.container}>
        <h3>Convert</h3>
        <input
        type='number'
        id='cantidad'
        min='0'
        max='100000'
        name='val'
        placeholder='ETH'
        onChange={(e)=> getValue(e)}
        />
            <button value='1' onClick={(e)=>convertEur(e)}>EUR</button>
            <button value='2' onClick={(e)=>convertDol(e)}>USD</button>
        {value ?( 
        <p>Result: {value}</p>)
        : <p>0.00</p>}
       
    </div>
  )
}

export default Conversor