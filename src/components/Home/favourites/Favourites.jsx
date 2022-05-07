import React,{useEffect,useState} from 'react'

const Favourites = () => {
    const [favorite,setFavorite] = useState(null)
    console.log(favorite,'fav de componente fav')
    
    // function sorting(){
    //     let data = Object.values(favorite)
    //     console.log(data)
    // }
    // sorting()
    let data;
    const getData= ()=>{
         data=JSON.parse(localStorage.getItem('new_favorite'))
         console.log(data,'data22')
          
    }
    getData()
    useEffect(()=>{
        setFavorite(getData())
    },[])
    
  return (
      <div>
          Favoritos:
        {data && data.map((e)=>(
            <div>
                <p>{e}</p>
            </div>
        ))}

    </div>
  )
}

export default Favourites