import React, { useState } from 'react'
import Add from '../Add'
import ItemList from './ItemList'

const AddList = () => {

    const [list,setList] = useState([])
    
    const addList = (li) =>{
      let id = Math.random(Math.random(10000) * 10)
      let item= {id:id, text: li, completed:false}
      let newList = [item, ...list]
     setList(newList)
    }
     const removeItem = (id)=>{
       let updateItem = [...list].filter((lis)=> lis.id !== id)
       setList(updateItem)
     }
  return (
    <div>
        <p>Adress List</p>
        <Add addList={addList}/>
        {list.map((item,idx)=>{
          return(
            <div key={idx}>
              <ItemList key={item.id} removeItem={removeItem} item={item}/>
            </div>
          )
        })}
    </div>
  )
}

export default AddList