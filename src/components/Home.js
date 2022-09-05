import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/home.css";

function Home() {
  const {user, setUser} = useContext(AppContext);
  let navigate = useNavigate();

  if (user) {
    return (
      <div className='home-page-div'>
        <h1>Welcome {user.username}!</h1>
          <button onClick={(e) => {
              e.preventDefault()
              fetch('/logout', {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
              });
              setUser("")
              navigate("/")
              }}>Logout
          </button>
          <button onClick={()=>navigate(`/users/${user.id}`)}>Profile</button>
          <button onClick={()=>navigate(`/products`)}>All Products</button>

      </div>
    );
  } else {
    return (
      <div className='home-page-div'>
        <h1>Welcome To Oil Tracker</h1>
        <nav>
          <Link exact path="/">Login or Signup</Link>
        </nav>
      </div>
    );
  };
};

export default Home;