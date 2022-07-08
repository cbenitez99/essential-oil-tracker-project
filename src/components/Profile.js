import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const {user} = useContext(AppContext)

  let navigate = useNavigate()
  return (
    <div>
        <h1>Hello {user.username}</h1>
        <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
    
  )
}

export default Profile