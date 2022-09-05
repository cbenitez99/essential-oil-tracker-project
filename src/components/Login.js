import './css/menu.css';
import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function Login() {

    const {setUser} = useContext(AppContext); 

    let navigate = useNavigate();

    const [formData, setFormData] = useState({username: "", password: ""});
    const [loginData, setLoginData] = useState({username: "", password: ""});

    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };   

    const handleLogin = (e) => {
        e.preventDefault();
        let params = { ...loginData };
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
                    setUser(json);
                    navigate(`/home`);
                })
            } else {
                resp.json()
                .then(json => setErrors(json.errors));
            }
        });
    };

    const handleSignup = (e) => {
        e.preventDefault()
        let params = { ...formData };
        fetch("/users", {
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
                    navigate(`/home`)
                })
            } else {
                resp.json()
                .then(json => setErrors(json.errors));
            }
        });
    };

    return (
        <div className="main-menu">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<form onSubmit={handleSignup}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input onChange={handleChange} type="text" name="username" placeholder="Username" value={formData.username}/>
					<input onChange={handleChange} type="password" name="password" placeholder="Password" value={formData.password}/>
					<button>Sign up</button>
				</form>
                <p style={{color: "red"}}> {errors.join(", and ")}</p>
			</div>

			<div className="login">
				<form onSubmit={handleLogin}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
                    <input onChange={handleChange} type="text" placeholder="Username" name="username" value={formData.username}/>
					<input onChange={handleChange} type="password" name="password" placeholder="Password" value={formData.password}/>
					<button>Login</button>
				</form>
                <p style={{color: "red"}}> {errors}</p>
			</div>
	    </div>
    );
};

export default Login;