import React,{useState,useEffect} from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'
import config from '../config'


const Show = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
      axios.get(`${config.url}/crud`).then(response=>{
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

<Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Show