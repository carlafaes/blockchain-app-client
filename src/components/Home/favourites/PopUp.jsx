import React,{useState} from 'react';
import Favourites from './Favourites';
import sty from './Popup.module.css'
import {FaRegWindowClose,FaWindowClose} from 'react-icons/fa';

export default function Popup(props){
    return(props.timedPopup && props.toggle) ? (
            <div className={sty.popup}>
            <div className={sty.popup_inner}>
                <button className={sty.btn}
                onClick={()=> props.setTimedPopup(false)}
                >
                <FaWindowClose/>
                </button>
                <Favourites/>
               
            </div>
        </div>
        ) : '';
}