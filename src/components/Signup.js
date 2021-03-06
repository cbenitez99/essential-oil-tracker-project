import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const Signup = () => {
    const {setUser} = useContext(AppContext);

    let navigate = useNavigate();

    const [formData, setFormData] = useState({ username: "", password: "" });

    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let params = { ...formData }
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
                    navigate(`/`)
                })
            } else {
                resp.json()
                .then((json) => {
                    setErrors(json.errors)
                });
            }
        });
    };

    return (
        <div>
        <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Create Username:</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}/>
                <label htmlFor="password">Create Password:</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}/>
                <button type="submit">Sign-Up</button>
                <br/>
                <p style={{color: "red"}}> {errors.join(", and ")}</p>
                <p>Already have an account? <a href='/login'>Log-In</a></p>
            </form>
        </div>
    );
};
export default Signup;