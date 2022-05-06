import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
    const [fav,setFav]= useState({
        adress:''
    })
    console.log(fav,'fac')
    useEffect(()=>{
        dispatch(getAddress())
    },[])

    function handleSelect(e){
        setFav({
            ...fav,
            adress:[...fav.adress, e.target.value]
        })
    }


  return (
    <div>
        
            <div>Adress</div>
            <select onChange={handleSelect}>
            {adressTotal && adressTotal.map((ad,idx)=>(
                    <option>{ad.adress}</option>
                
                ))}
        </select>
        <div>
            <ul>

               <li>
               {fav.length > 0 && 
               fav.adress.map((e)=>(
                   <p>{e}</p>
               ))}
               </li> 
            </ul>
        </div>
    </div>
  )
}

export default List