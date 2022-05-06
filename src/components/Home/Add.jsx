import React,{useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAdress, addAdressType} from '../../redux/action/index'

const Add = (props) => {
    const dispatch = useDispatch();
    const {addList} = props;
    
    const [input,setInput] =useState('')

    const handleChange=(e)=>{
        setInput(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addAdress(input))
        setInput('')
    };

    useEffect(()=>{
        return () =>{
            dispatch(addAdressType())
        }
    })

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