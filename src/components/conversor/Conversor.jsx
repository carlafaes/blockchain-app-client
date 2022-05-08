import  style  from './Conversor.module.css';
import React,{useState} from 'react'
import logo from '../../utils/pngegg.png'

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
        <div className={style.cont_img_input}>
        <img src={logo} alt='logo_xz' className={style.logo}/>
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
            <button className='close_btn' value='1' onClick={(e)=>convertEur(e)}>EUR</button>
            <button className='close_btn' value='2' onClick={(e)=>convertDol(e)}>USD</button>
        {value ?( 
        <p>RESULT: {value}</p>)
        : <p>RESULT: 0.00</p>}
        </div>
        </div>
       
    </div>
  )
}

export default Conversor