import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import Wrapper from "./Components/Helpers/Wrapper";

function App() {
  const [userList, setuserList] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setuserList((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <Wrapper>
      <AddUser callback={addUserHandler}></AddUser>
      <UsersList users={userList}></UsersList>
    </Wrapper>
  );
}

export default App;
