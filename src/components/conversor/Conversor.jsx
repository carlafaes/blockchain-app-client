import React,{useState} from 'react'

const Conversor = () => {
const  [val, setVal]=useState('')
console.log(val,'val')
    function convertEur(e){
      setVal(e.target.val.value)
      console.log(val,'eur')
    }
  return (
    <div>
        <h3>Convert</h3>
        <input
        type='number'
        id='cantidad'
        min='0'
        max='100000'
        name='val'
        />
        <select id='de' >
            <option value='1' onChange={convertEur}>EUR</option>
            <option value='2'>USD</option>
            <option value='3'>ETH</option>
        </select>
        <h5 id='resultado'>resultado {val}</h5>
    </div>
  )
}

export default Conversor