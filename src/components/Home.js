import React, {useState, useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function Home() {
  const {user, setUser} = useContext(AppContext)
  const [oils, setOils] = useState([]);
  let navigate = useNavigate()


  useEffect(() => {
    fetch("/oils")
    .then(resp => resp.json())
    .then(data => {
      setOils(data)
    })
  }, [])

  const handleClick = () => {
    console.log(oils)
  }
  if (user.id) {
    return (
      <div>
        <h1>Welcome To Oil Tracker: <em>{user.username}</em></h1>
        <button onClick={handleClick}>Log Data</button>
        <nav>
          <Link to="profile">Profile</Link> |{" "}
          <Link to="/" onClick={(e) => {
              e.preventDefault()
              fetch('/logout', {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
                }).then(resp => {
                  setUser({})
                  navigate("/")
                })
              }}>Logout
          </Link>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome To Oil Tracker</h1>
        <button onClick={handleClick}>Log Data</button>
        <nav>
          <Link to="login">Login</Link> |{" "}
          <Link to="signup">Signup</Link> 
        </nav>
      </div>
    );
  }
  
}

export default Home