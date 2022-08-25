import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const Adduser = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    axios
      .post(`${config.url}/crud/save`, input)
      .then((response) => {
        alert("User Saved");
        setInput(initialState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row col-5 offset-3">
      <h1>Add User</h1>
      <form>
        <div>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name={"name"}
              value={input.name}
              onChange={handleChange}
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
              value={input.email}
              onChange={handleChange}
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
              value={input.password}
              onChange={handleChange}
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>{" "}
          <br /> <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
