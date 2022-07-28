import './css/login.css';
import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function Login() {

    const {setUser} = useContext(AppContext); 

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState("");

    const handleChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };   

    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
            ...formData  
          }
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
            if(resp.ok){
                resp.json()
                .then((json) => {
                    setUser(json)
                    navigate(`/`)
                })
            } else {
                resp.json()
                .then(json => setErrors(json.errors))
            }
        });
    };

    return (
        <div>
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}/>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}/>
                <button type="submit">Login</button>
                <br/>
                <p style={{color: "red"}}> {errors}</p>
                <p>Dont have an account? <a href='/signup'>Sign-Up</a></p>
                <p><a href='/signup'>Forgot Password?</a></p>
            </form>
        </div>
    );
};

export default Login;