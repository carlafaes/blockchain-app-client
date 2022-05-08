import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'
import  style  from './List.module.css';
import sty from '../favourites/Popup.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../utils/pngegg.png'
import { MdFavorite,MdOutlineFavoriteBorder } from 'react-icons/md';


//components
import Popup from '../favourites/PopUp';
import Add from '../../Add/Add';

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
    const [fav,setFav]= useState([])
    let data = fav
    console.log(data,'data')
    // console.log(fav,'favoritos')

    const [buttonPopup, setButtonPopup] = useState(true);
    const [timedPopup, setTimedPopup] = useState(false);


    const message= ()=>{
        toast.success('Added to favorites successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    
  

    useEffect(()=>{
        dispatch(getAddress())
    },[])

    const addFavorite = (_id)=>{
        if(!fav.includes(_id)){
            setFav([...fav,_id])
            // console.log(_id)
        } 
        localStorage.setItem('new_favorite', JSON.stringify(data))
        message();
    }
   

  return (
    <div>
        <div className={style.container_gral}>
        <div className={style.container_head}>
        <div className={style.title_logo}>
        <div className='title'>ADRESS</div>
        <img src={logo} alt='logo_xz' className={style.logo}/>
        </div>
            <button className='close_btn'
                onClick={()=> setTimedPopup(true)}
                >Favorites</button>
        <Add/>
        </div>
            <div className={sty.main_}>
            <Popup
            timedPopup={timedPopup}
            setTimedPopup={setTimedPopup}
            toggle={buttonPopup}
            setToggle={setButtonPopup}
            />  
            </div>
            <li fav={adressTotal} className={style.li_add}>
            {adressTotal && adressTotal.map((ad,idx)=>(
                    <div key={idx} className={style.add_fav}>
                        <p className={style.address}>{ad.adress}</p>
                        <button className={style.btn} onClick={()=> addFavorite(ad._id)}><MdOutlineFavoriteBorder/></button>
                    </div>
                
                ))}
        </li>
        </div>
        <ToastContainer 
            theme='light'
            />
    </div>
  )
}

export default List