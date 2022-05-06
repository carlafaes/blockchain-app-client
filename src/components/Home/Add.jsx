import React,{useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAdress, addAdressType} from '../../redux/action/index'

const Add = () => {
    const dispatch = useDispatch();
    
    const [input,setInput] =useState({
        adress:''
    })

    const handleChange=(e)=>{
        setInput({[e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault()

        let succes = {
            adress: input.adress
        }
        dispatch(addAdress(succes))
        setInput({
            adress:''
        })
        alert('Adress created succesfully');
    };

    useEffect(()=>{
        return () =>{
            dispatch(addAdressType())
        }
    },[dispatch])


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Add a Adress'
            value={input.adress}
            name='adress'
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