import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

function Profile() {
  const {user} = useContext(AppContext)

  return (
    <div>
        <h1>Hello {user.username}</h1>
    </div>
    
  )
}

export default Profile