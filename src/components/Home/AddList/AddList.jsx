import React, { useState } from 'react'
import Add from '../Add'

const AddList = () => {

    const [list,setList] = useState([])

    const addList = (li) =>{
     let id = Math.random(100) * 10
     console.log(id)
    }

  return (
    <div>
        <p>Adress List</p>
        <Add addList={addList}/>
    </div>
  )
}

export default AddList