import { style } from '@mui/system';
import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'
import sty from '../favourites/Popup.module.css'

//components
import Popup from '../favourites/PopUp';

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
    const [fav,setFav]= useState([])
    let data = fav
    console.log(data,'data')
    // console.log(fav,'favoritos')

    const [buttonPopup, setButtonPopup] = useState(true);
    const [timedPopup, setTimedPopup] = useState(false);
    // console.log(timedPopup,'timed')
   
    useEffect(()=>{
        dispatch(getAddress())
    },[])

    const addFavorite = (_id)=>{
        if(!fav.includes(_id)){
            setFav([...fav,_id])
            // console.log(_id)
        } 
        localStorage.setItem('new_favorite', JSON.stringify(data))
    }
   

  return (
    <div>
        
            <div>Adress</div>
            <button className={sty.close_btn}
                onClick={()=> setTimedPopup(true)}
                >Open</button>
            <div className={sty.main_}>
            <Popup
            timedPopup={timedPopup}
            setTimedPopup={setTimedPopup}
            toggle={buttonPopup}
            setToggle={setButtonPopup}
            />  
            </div>
            <li fav={adressTotal}>
            {adressTotal && adressTotal.map((ad,idx)=>(
                    <div key={idx}>
                        <p>{ad.adress}</p>
                        <button  onClick={()=> addFavorite(ad._id)}>fav</button>
                    </div>
                
                ))}
        </li>
    </div>
  )
}

export default List