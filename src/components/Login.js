import './css/login.css'
import React, {useContext, useState} from 'react'
import { AppContext } from '../App';

function Login() {
    const {setUser} = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = () => { 
        fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formData })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        // setFormData({username: username, password: password}));
    };

  return (
        <div>
            <h1>Login</h1>
            <div className="canvas">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => {setUsername(e.target.value)}}/>
                    <input onChange={(e) => {setPassword(e.target.value)}}/>
                    <button onClick={handleSubmit} className="button purple"><span>Login Button</span></button>
                </form>
            </div>
        </div>
    
  );
};

export default Login;