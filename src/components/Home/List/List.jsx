import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
    const [fav,setFav]= useState([])
    let favs=[]
    let favourite=()=>{
        favs= [...fav,fav]
        console.log(favs,'f')
    }
    favourite()
    console.log(fav,'fac')
    useEffect(()=>{
        dispatch(getAddress())
    },[])

    const addFavorite = (_id)=>{
        if(!fav.includes(_id)){
            setFav(fav.concat(_id))
            console.log(_id)
        } 
    }
    

  return (
    <div>
        
            <div>Adress</div>
            <li fav={adressTotal}>
            {adressTotal && adressTotal.map((ad,idx)=>(
                    <div>
                        <p>{ad.adress}</p>
                        <button  onClick={()=> addFavorite(ad._id)}>fav</button>
                    </div>
                
                ))}
        </li>
        {/* <div>
            <ul>

               <li>
               {fav.length > 0 && 
               fav.adress.map((e)=>(
                   <p>{e}</p>
               ))}
               </li> 
            </ul> */}
        
    </div>
  )
}

export default List