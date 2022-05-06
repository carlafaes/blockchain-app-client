import React from 'react'

export default function ItemList(props){
    const {item, removeItem} = props;
  return (
    <div>
        {item.text}
        <div>
            <button onClick={()=> removeItem(item.id)}>delete</button>
        </div>
    </div>
  )
}

