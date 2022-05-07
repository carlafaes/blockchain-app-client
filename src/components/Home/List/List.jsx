import { style } from '@mui/system';
import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'
import Favourites from '../favourites/Favourites';
import Popup from '../favourites/PopUp';
import sty from '../favourites/Popup.module.css'

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
    const [fav,setFav]= useState([])
    let favs=[]
    const [favoritos,setFavoritos] = useState(null)
    console.log(fav,'favoritos')

    const [buttonPopup, setButtonPopup] = useState(true);
    const [timedPopup, setTimedPopup] = useState(false);
    console.log(timedPopup,'timed')
    let favourite=()=>{
    }
    
    useEffect(()=>{
        dispatch(getAddress())
        window.localStorage.setItem('fav',JSON.stringify(fav))
    },[])

    const addFavorite = (_id)=>{
        if(!fav.includes(_id)){
            setFav([...fav,_id])
            console.log(_id)
        } 
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
            <Favourites valorList={favoritos}/>
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