import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAddress } from '../../../redux/action/index'

const List = () => {
    const dispatch= useDispatch();
    const adressTotal= useSelector((st) => st.adress)
    console.log(adressTotal)

    useEffect(()=>{
        dispatch(getAddress())
    },[])

  return (
    <div>
        <table>
            <thead>Adress</thead>
            {adressTotal && adressTotal.map((ad)=>(
                <tr>{ad.adress}</tr>
            ))}
        </table>
    </div>
  )
}

export default List