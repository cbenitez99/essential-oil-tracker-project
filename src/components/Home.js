import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/home.css"

function Home() {
  const {user, setUser} = useContext(AppContext);
  let navigate = useNavigate();

  if (user.id) {
    return (
      <div className='home-page'>
        <h1>Welcome To Oil Tracker: <em>{user.username}</em></h1>
        <nav>
          <Link to="/home" onClick={(e) => {
              e.preventDefault()
              fetch('/logout', {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
              });
              setUser({})
              navigate("/")
              }}>Logout
          </Link>
        </nav>
      </div>
    );
  } else {
    return (
      <div className='home-page'>
        <h1>Welcome To Oil Tracker</h1>
        <nav>
          <Link exact path="/">Login or Signup</Link>
        </nav>
      </div>
    );
  };
};

export default Home;