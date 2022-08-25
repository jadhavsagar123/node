import axios from 'axios';
import React,{useEffect,useState} from 'react';
import config from '../config';



const Page = () => {

    const [state,setState]=useState([]);
    const [limit,setLimit]=useState(10);
    const [page,setPage]=useState(0);
    const [totalRecords,setTotalRecords]=useState(0);
    const [pageArray,setPageArray]=useState([]);



    useEffect(()=>{
        axios.get(`${config.url}/crud/pagination/?limit=${limit}&skip=${limit*page}`).then(response=>{
            setState(response.data.data);
            setTotalRecords(response.data.totalCount);

          const arr=  Array.from(Array(Math.ceil(response.data.totalCount/limit)).keys());

          setPageArray([...arr]);

          

    
        }).catch(err=>{
          console.log(err);
        })
    
      },[page])

const loadNewData=(pageNumber)=>{
 
    setPage(pageNumber);

}

  return (
    <div>
     {
        state.map(ele=>(
            <li>{ele.name}</li>
        ))
     }

  
  
    <ul style={{display:"flex" ,listStyleType:"none"}}>

        {
             pageArray.map(ele=>(
                <li style={{padding:"3px"}} onClick={()=>loadNewData(ele+1)}> <a> {ele+1}</a> </li>
            ))

        }


    </ul>
   



    </div>
  )
}

export default Page