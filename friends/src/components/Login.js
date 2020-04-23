import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

function Login(props) {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", data)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/private");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserNameForm
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <UserNameForm
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Buttons>Login</Buttons>
      </form>
    </div>
  );
}

export default Login;

// styled components:

const Buttons = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Kalam', cursive;
`;
const UserNameForm = styled.input`
  padding: 10px;
  margin-right: 20px;
  border-radius: 10px;
  font-family: 'Kalam', cursive;
`;
