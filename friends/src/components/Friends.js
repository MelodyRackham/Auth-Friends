import React, { useState, useEffect } from "react";
import AuthFriends from "./AuthFriends";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(...friends, res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <AuthFriends setFriends={setFriends} />
      {friends.map(item => (
        <div key={item.id}>
          <FriendInfo>
            <Name>Name: {item.name}</Name>
            <Age>Age: {item.age}</Age>
            <Email>Email: {item.email}</Email>
          </FriendInfo>
        </div>
      ))}
    </div>
  );
};

export default Friends;

// styled componenets:

const Name = styled.h3`
  color: navy;
  font-size: 1.5rem;
`;
const Age = styled.h3`
  color: navy;
  font-size: 1.5rem;
`;
const Email = styled.h3`
  color: navy;
  font-size: 1.5rem;
`;
const FriendInfo = styled.div`
  border: 3px solid pink;
  width: 50%;
  
`;
