import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Home() {

  const [oils, setOils] = useState([]);

  useEffect(() => {
    fetch("/oils")
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setOils(data)
    })
  }, [])

  const handleClick = () => {
    console.log(oils)
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Log Data</button>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="login">Login</Link> |{" "}
        <Link to="signup">Signup</Link> 
      </nav>
    </div>
  );
}

export default Home