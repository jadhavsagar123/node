import React,{useEffect,useState} from 'react'
import axios from "axios";
import config from "../config";

const Api = () => {
  const initialState={
    name:"",
    email:"",
    password:""
   }
   const [state,setState]=useState("");

   const [input,setInput]=useState(initialState)
/*
 
  */


  const handleChange=(event)=>{
    setInput({...input,[event.target.name]:event.target.value});

  }

  const handleClick=()=>{
    axios.post(`${config.url}/crud/save`,input).then(response=>{
     alert("User Saved");
     setInput(initialState);

    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div>
     <h1>Add User</h1>

<input type={"text"} name={"name"}  value={input.name} placeholder="Name" onChange={handleChange} /><br/>

<input type={"text"} name={"email"} value={input.email} placeholder="Email" onChange={handleChange}/><br/>

<input type={"text"} name={"password"} value={input.password} placeholder="Password" onChange={handleChange}/><br/>

<button onClick={handleClick}>

  Submit
</button>





    </div>
  )
}

export default Api