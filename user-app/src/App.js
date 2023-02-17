import { Fragment, useState } from 'react';
import './App.css';
import UserForm from './Components/Users/UserForm';
import UserList from './Components/Users/UsersList';

function App() {
  const [userList, setUserList] =useState([]);
  const userHandler =(userID, userName, userAge) =>{
    setUserList(prev => {
      return [...prev, {id:userID, name:userName, age:userAge}]
    })
  }
  return (
    <Fragment>
      <UserForm onAddUser={userHandler}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
