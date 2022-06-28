import './css/login.css'
import React, {useContext, useState} from 'react'
import { AppContext } from '../App';

function Login() {
    const {setUser} = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };

    const handleSubmit = () => { 
        fetch('/users', requestOptions)
        .then(response => response.json())
        .then(data => setUser({username: data.username, password: data.password}));
    };

  return (
        <div>
            <h1>Login</h1>
            <div className="canvas">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => {setUsername(e.target.value)}}/>
                    <input onChange={(e) => {setPassword(e.target.value)}}/>
                    <button onClick={handleSubmit} class="button purple"><span>Login Button</span></button>
                </form>
            </div>
            {console.log(user)}
        </div>
    
  );
};

export default Login;