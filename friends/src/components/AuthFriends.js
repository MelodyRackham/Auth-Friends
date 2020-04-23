import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const AuthFriends = ({ setFriends }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now()
  });
  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };
  const friendPosted = data => {
    axiosWithAuth()
      .post("/friends", data)
      .then(res => {
        setFriends(res.data);
        console.log("Added", res);
      })
      .catch(err => {
        console.log("Failed", err);
      });
    setNewFriend({
      name: "",
      age: "",
      email: ""
    });
  };
  return (
    <div>
      <AddForm
        type="text"
        name="name"
        value={newFriend.name}
        onChange={handleChanges}
        placeholder="Name"
      />
      <AddForm
        type="text"
        name="age"
        value={newFriend.age}
        onChange={handleChanges}
        placeholder="Age"
      />
      <AddForm
        type="text"
        name="email"
        value={newFriend.email}
        onChange={handleChanges}
        placeholder="Email"
      />
      <Buttons onClick={() => friendPosted(newFriend)}>Add Friend</Buttons>
    </div>
  );
};

export default AuthFriends;

// styled components:

const AddForm = styled.input`
  padding: 5px;
  border-radius: 7px;
  margin-right: 13px;
  font-family: 'Kalam', cursive;
  
`;
const Buttons = styled.button`
  border-radius: 15px;
  background-color: navy;
  color: white;
  font-size: 1.5rem;
  font-family: 'Kalam', cursive;
  font-family: 'Kalam', cursive;
`;
