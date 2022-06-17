import React from 'react'
import { LoginContext } from './Login'

function Profile() {
    const {user} = useContext(LoginContext)



  return (
    <div>
        <h1>Welcome {user.username}</h1>
    </div>
    
  )
}

export default Profile