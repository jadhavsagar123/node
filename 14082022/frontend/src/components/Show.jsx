import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Button, Modal } from "antd";
import axios from "axios";
import config from "../config";

const Show = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editState, setEditstate] = useState([{
    name: "",
    email: ""
  }]);

  // show part
  useEffect(() => {
    axios
      .get(`${config.url}/crud`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [trigger, isModalVisible]);

  // search part

  const [search, setSearch] = useState("");

  const handelSearch = (event) => {

    setSearch(event.target.value)
  };

  const handleClick = () => {
    axios
    .get(`${config.url}/crud/pagination/?search=${search}`, editState)
    .then((response) => {
    console.log(response.data.data)
    setData(response.data.data)
      
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // edit part

  const showEditPopup = (record) => {
    setEditstate(record);
    setIsModalVisible(true);
  };
  const handelEditChange = (event) => {
    setEditstate({ ...editState, [event.target.name]: event.target.value });
  };

  const handleOk = () => {
    axios
      .put(`${config.url}/crud/updateOne`, editState)
      .then((response) => {
       
       // setData(response.data.data);
        setIsModalVisible(false);
        setTrigger(!trigger);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //delete part

  const deleteUser = (id) => {
  
    axios
      .delete(`${config.url}/crud/deleteOne/${id}`)
      .then((response) => {
        console.log(response);

        setTrigger(!trigger);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //table coloumn
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "ID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Edit",
      key: "Edit",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => showEditPopup(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
    {
      title: "delete",
      key: "delete",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => deleteUser(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="row col-5 offset-4">
        <h1>Search User</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              name={"search"}
              onChange={handelSearch}
              className="form-control"
              id="search"
              placeholder="Enter name"
            />{" "}
            <br /> <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              search User
            </button>
          </div>
        </form>
      </div>
      <br />
      <br /> <br />
      <h1>All users</h1>
      <Table columns={columns} dataSource={data} />
      {/* modal */}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <div>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name={"name"}
                value={editState.name}
                onChange={handelEditChange}
                className="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="text"
                name={"email"}
                value={editState.email}
                onChange={handelEditChange}
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="text"
                name={"password"}
                value={editState.password}
                onChange={handelEditChange}
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Show;
