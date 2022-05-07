import React,{useEffect,useState} from 'react'

const Favourites = () => {
    const [favorite,setFavorite] = useState(null)
    const [dta,setDta]=useState(null)
    console.log(dta,'dta')
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
      <div>
        <div>
            <h4>Order</h4>
         <button onClick={handleSortAsc}>a-z</button>
         <button onClick={handleSortDesc}>z-a</button>
        </div>
          <h4>Favorites</h4>
          {dta&& dta.map((e)=>(
              <p>{e}</p>
          ))}
    </div>
  )
}

export default Favourites