import React from 'react'
import { Link } from 'react-router-dom';

function Home({oils}) {
  return (
    <div>
      <h1>Home</h1>
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