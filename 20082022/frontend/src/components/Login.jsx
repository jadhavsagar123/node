import React,{useEffect,useState} from 'react'
import axios from "axios";
import config from "../config";

const Login = () => {
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
    axios.post(`${config.url}/login`,input).then(response=>{
       // console.log(response.data);
       const token=response.data.token;
     //  document.cookie=`token=${token}`;

     localStorage.setItem("token",token);
 
     setInput(initialState);

    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div>
     <h1>Login Page</h1>



<input type={"text"} name={"email"} value={input.email} placeholder="Email" onChange={handleChange}/><br/>

<input type={"text"} name={"password"} value={input.password} placeholder="Password" onChange={handleChange}/><br/>

<button onClick={handleClick}>

  Submit
</button>





    </div>
  )
}

export default Login