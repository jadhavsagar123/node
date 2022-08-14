import React,{useEffect,useState} from 'react'
import axios from "axios";
import config from "../config";

const Api = () => {
   const [state,setState]=useState("");
   const [data,setdata]=useState({
    name:"",
    email:""
   });

   const handleChange=(event)=>{
    console.log(event)
    setdata({...data,[event.target.name]:event.target.value})
   }
  useEffect(()=>{
    axios.get(`${config.url}`).then(response=>{
      setState(response.data);

    }).catch(err=>{
      console.log(err);
    })

  },[])

  const sendData=()=>{
    axios.post(`${config.url}/data`,data).then(response=>{
        
  
      }).catch(err=>{
        console.log(err);
      })
  
  }

  return (
    <div>Api
     <h1>{state}</h1>
     <input name='name' onChange={handleChange} type="text" /> <br />
     <input name='email' onChange={handleChange} type="text" /> <br />
     <button onClick={sendData}> send </button>


    </div>
  )
}

export default Api