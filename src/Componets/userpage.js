import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './users.css'
import UserList from './userList'

function Userpage() {
  const[users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console .log(err))
  },[])
  return (
    <div>
      <h2>users information</h2>
      <table>
        <thead>
          <th>s.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>website</th>
          <th>company</th>
          <th>city</th>
          <th>More info</th>
          
        </thead>
        <tbody>
          
      
   
        {/* {users.map((user,index)=><tr key={index}>
            <td>{user.id}</td>
            <td>{user. name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>{user.company .name }</td>
            <td>{user.address.city}</td>
          </tr> )} */}
          {users.map((User,index)=> <UserList key={index} User={User}/>)}
          </tbody>
          </table>
    </div>
  )
}

export default Userpage
