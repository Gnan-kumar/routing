import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lognipage() {
  const navigate =useNavigate()
  const handleLogin=(event) =>{
       event.preventDefault();
       alert("login successful")
       navigate("/about")

  }
  return (
    <div>
      
      <from onSubmit={handleLogin}>
        <div>
          <label>UserName:</label>
          <input type="password"/>
        </div>
        <div>
          <label>password</label>
          <input type="password"/>
        </div>
        <input type="submit" value="login"/>
      </from>
    </div>
  )
}

export default Lognipage
