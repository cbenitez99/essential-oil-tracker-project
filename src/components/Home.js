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
  return (
    <div>
      <h1>Home: {user.username}</h1>
      <button onClick={handleClick}>Log Data</button>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="login">Login</Link> |{" "}
        <Link to="signup">Signup</Link> |{" "}
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
}

export default Home