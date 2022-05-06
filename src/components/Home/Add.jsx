
import React,{useState} from 'react'

const Add = (props) => {
    
    const [input,setInput] =useState('')

    const handleChange=(e)=>{
        setInput(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.addList(input)
        console.log(input)
        setInput('')
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Add a Adress'
            value={input}
            name='text'
            onChange={handleChange}
            />
            <button type='submit'>
                Add 
            </button>
        </form>
    </div>
  )
}

export default Add