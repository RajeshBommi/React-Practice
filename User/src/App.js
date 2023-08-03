
import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList,setuserList]=useState([]);
const addHandler=(uName,uAge)=>{
    setuserList((prevuserList)=>{
      return [...prevuserList ,{name :uName, age :uAge ,id: Math.round().toString()}];
    });
}
  return (
    <div>
      <AddUser onAddUser={addHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
