import {useContext} from 'react'
import { UserContext } from '../App'

function Profile() {
    const {user} = useContext(UserContext)



  return (
    <div>
        <h1>Welcome {user.username}</h1>
    </div>
    
  )
}

export default Profile