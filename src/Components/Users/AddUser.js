import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [userName, setuserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernamehandler = (event) => {
    setuserName(event.target.value);
  };
  const agenamehandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Age must be greater than 1",
      });
      return;
    }
    console.log(userName, age);
    props.callback({ name: userName, age, id: Math.random() });
    setuserName("");
    setAge("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onClick={() => {
            setError();
          }}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card>
        <form className={style.form} onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={usernamehandler}
            id="username"
            type="text"
            name="username"
            value={userName}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            onChange={agenamehandler}
            id="age"
            name="age"
            type="number"
            value={age}
          ></input>
          <Button onClick={formSubmitHandler}>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
