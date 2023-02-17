import { useRef, useState } from "react";
import Wrapper from "../Helper/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import "./UserForm.css";

const UserForm = (props) => {
  const nameInputRef =useRef();
  const ageInputRef =useRef();

/*  Commented Lines indicated use of hooks instead of References(Ref's)  */
  // const [enteredName, setUserName] = useState("");
  // const [enteredAge, setUserAge] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const userData = {
      id: Math.random(),
      name: enteredName,
      age: +enteredAge,
    };
    // setUserName("");
    // setUserAge("");
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:"Invalid Input !",
        message:"Please Enter Name and Age (Non-Empty Values)!"
      });
      return;
    }
    props.onAddUser(userData.id, userData.name, userData.age);
    console.log(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  // const nameHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const ageHandler = (event) => {
  //   setUserAge(event.target.value);
  // };
  const errorHandler =() =>{
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} okHandler={errorHandler}/>}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label>User's Name *</label>
          <input
            id="name"
            type="text"
            // value={enteredName}
            // onChange={nameHandler}
            placeholder="Enter Your Name"
            ref={nameInputRef}
          />
        </div>
        <div>
          <label>User's Age (Years) *</label>
          <input
            id="age"
            // onChange={ageHandler}
            // value={enteredAge}
            type="number"
            min="1"
            max="120"
            steps="1"
            placeholder="Enter Your Age in Years"
            ref={ageInputRef}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Wrapper>
  );
};
export default UserForm;
