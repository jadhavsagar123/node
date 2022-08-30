import React,{useEffect} from 'react'
import axios from 'axios'

const Pagination = () => {

    useEffect(()=>{

        axios.get(`${config.url}/crud/pagination`).then(response=>{
            setData(response.data.data);
      
          }).catch(err=>{
            console.log(err);
          })
      

    },[])
  return (
    <div>
        <h1>Server Side Pagination</h1>








    </div>
  )
}

export default Pagination