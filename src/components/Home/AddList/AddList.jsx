import React, { useState } from 'react'
import Add from '../Add'

const AddList = () => {

    const [list,setList] = useState([])

    const addList = (li) =>{
     
    }

  return (
    <div>
        <p>Adress List</p>
        <Add onSumbit={addList}/>
    </div>
  )
}

export default AddList