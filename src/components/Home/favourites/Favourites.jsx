import React,{useEffect,useState} from 'react'

const Favourites = (props) => {
    const [favorite,setFavorite] = useState('')
    console.log(favorite,'fav de componente fav')
    const getData= ()=>{
        return localStorage.getItem('new_favorite')
    }
    useEffect(()=>{
        setFavorite(getData())
    },[])
    
  return (
    <div>Favoritos:{favorite}</div>
  )
}

export default Favourites