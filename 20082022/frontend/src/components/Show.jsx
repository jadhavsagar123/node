import React,{useState,useEffect} from 'react'
import { Space, Table, Tag } from 'antd';
import config from "../config";
import axios from 'axios';


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const Show = () => {
    const [data,setData]=useState([]);
    

    const onChange=()=>{
      

    }
    useEffect(()=>{
     const configData={
      headers: {
        token: localStorage.getItem("token")//getCookie("token"),
      }


     }


        axios.get(`${config.url}/data`,configData).then(response=>{
          setData(response.data.data);
    
        }).catch(err=>{
          console.log(err);
        })
    
      },[])

    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
  return (
    <div>

<Table columns={columns} dataSource={data}  pagination={{ defaultPageSize: 10, onShowSizeChange:onChange, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />
    </div>
  )
}

export default Show