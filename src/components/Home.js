import React from 'react'
import { Link } from 'react-router-dom';

function Home({oils}) {
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