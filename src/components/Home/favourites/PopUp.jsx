import React,{useState} from 'react';
import Favourites from './Favourites';
import sty from './Popup.module.css'

export default function Popup(props){
    return(props.timedPopup && props.toggle) ? (
            <div className={sty.popup}>
            <div className={sty.popup_inner}>
                <Favourites/>
                <button className='close-btn'
                onClick={()=> props.setTimedPopup(false)}
                >
                ❌
                </button>
               
            </div>
        </div>
        ) : '';
}