import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function Home() {
  const {user, setUser} = useContext(AppContext);
  let navigate = useNavigate();

  if (user.id) {
    return (
      <div>
        <h1>Welcome To Oil Tracker: <em>{user.username}</em></h1>
        <nav>
          <Link to={`/users/${user.id}`}>Profile</Link> |{" "}
          <Link to="/" onClick={(e) => {
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
      <div>
        <h1>Welcome To Oil Tracker</h1>
        <nav>
          <Link to="login">Login</Link> |{" "}
          <Link to="signup">Signup</Link> 
        </nav>
      </div>
    );
  };
};

export default Home;