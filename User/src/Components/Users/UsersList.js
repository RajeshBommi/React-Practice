import React from 'react'

const UsersList=(props)=> {
  return (
    <ul>
    {props.users.map((users)=>(
    <li key={users.id}>
        {users.name} ({users.age} Years Old)
      </li>
    ))}
    </ul>
  )
}

export default UsersList