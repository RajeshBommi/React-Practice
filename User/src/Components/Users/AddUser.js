import React, { useRef, useState } from 'react'
import ErrorModal from './ErrorModal';

const AddUser=(props)=> {
    const refInputName=useRef('');
    const refInputAge=useRef('');
    
    const [error,setError]=useState();
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        const enteredName=refInputName.current.valueOf;
        const enteredUserAge=refInputAge.current.valueOf;
        if(enteredName.trim().length ===0 || enteredUserAge.trim().length===0){
            setError({
                title: 'Invalid name',
                massege:'Please enter valid name and age'
            });
            return;
        }
        if(+enteredUserAge<1){
            setError({
                title:'Invalid Age',
                massege:'Please enter the age greater then -1'
            });
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        refInputName.current.valueOf='';
        refInputAge.current.valueOf='';
     
    };
    const errorHandler=()=>{
        setError(null);
    }
  return (
    <div>
    {error && <ErrorModal title={error.title} massege={error.massege} onChange={errorHandler}/>}
    <form onSubmit={onSubmitHandler}> 
        <label htmlFor='username'>Username</label>
        <input  id='username' 
        type='text' 
         ref={refInputName}/>
        <label htmlFor='Age'>Age(In Years)</label>
        <input id='Age'
         type='number'
         ref={refInputAge}/>
        <button type='Submit'>Add User</button>
    </form>
    </div>
    
  )
}

export default AddUser;