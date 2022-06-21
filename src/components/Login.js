import './css/login.css'
import React, {useContext} from 'react'
import { AppContext } from '../App';

function Login() {
    const {user, setUser} = useContext(AppContext);

    // const handleSubmit = () => {
    //     fetch("http:localhost:3000/users")
    // };

  return (
        <div>
            <h1>Login</h1>
            <div className="canvas">
                {/* <form onSubmit={handleSubmit}>
                    <input onChange={(e) => {setUser(e.target.value)}}/>
                    <button onClick={handleSubmit} class="button purple"><span>Login Button</span></button>
                </form> */}
           
                <button class="button purple"><span>Signup Button</span></button>
            </div>
            {console.log(user)}
        </div>
    
  );
};

export default Login;