import React,{useEffect,useState} from 'react'
import style from './Fav.module.css';
import { BsWallet2 } from 'react-icons/bs';
const Favourites = () => {
    const [favorite,setFavorite] = useState(null)
    const [dta,setDta]=useState(null)
    const tab = <>&nbsp;</>;
    const getData= ()=>{
         setDta(JSON.parse(localStorage.getItem('new_favorite')))
            //   return data
        }
     function handleSortAsc(){
          setDta([].concat(dta.sort((a,b)=> {
                return b.localeCompare(a)
            })))
            console.log(dta,'asc')
     }

     function handleSortDesc(){
        setDta([].concat(dta.sort((a,b)=> {
           return  a.localeCompare(b)
              
          })))
          console.log(dta,'desc')
   }
    useEffect(()=>{
        setFavorite(getData())
    },[])
    
  return (
      <div className={style.container}>
            <h4 className='title'>ORDER</h4>
        <div className={style.buttons_}>
         <button className='close_btn' onClick={handleSortAsc}>A-Z</button>
         <button className='close_btn' onClick={handleSortDesc}>Z-A</button>
        </div>
        <div className={style.fav_}>
          <h4 className='title'>FAVORITES</h4>
          {dta&& dta.map((e)=>(
              <p className={style.txt_} > <BsWallet2/>{tab} {e}</p>
          ))}
        </div>
    </div>
  )
}

export default Favourites