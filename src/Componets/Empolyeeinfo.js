import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Empolyeeinfo() {
    const[userDetials,setUsersDetails]=useState()
    const params=useParams();
    console.log(params.userId)
    useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
     .then(res=> console.log(res.date))
     .catch(err=>console.log(err))
 },[])
  return (
    <div>
       Employee Info :{params.userId}
       {date && <div>
        <h1></h1>
        </div>}
    </div>
  )
}

export default Empolyeeinfo
