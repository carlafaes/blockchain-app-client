import React from 'react'
import style from './Loader.module.css'
import { SiEthereum } from 'react-icons/si';

const Loader = () => {
  return (
      <div className={style.container}>
    <div className={style.loader}>
        <div className={style.circle}>
            <SiEthereum/>
        </div>
        <div className={style.circle}>
            <SiEthereum/>
        </div>
    </div>
      </div>
  )
}

export default Loader