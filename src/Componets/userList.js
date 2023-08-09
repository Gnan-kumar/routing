import React from 'react'
import{useNavigate} from 'react-router-dom'

function UserList({User}) {
  const navigate = useNavigate()
    const userMoreInfo =(id) =>{
      navigate(`/users/ ${id}`)
    }
  return (
    <tr>
        <td>{User.id}</td>
        <td>{User.name}</td>
        <td>{User.email}</td>
        <td>{User.website}</td>
        <td>{User.company.name}</td>
        <td>{User.address.city}</td>
        <td onClick={() => userMoreInfo(User.id)}> =$gt; </td>

    </tr>
  )
}
export default UserList