import './css/login.css'
import React, {useContext} from 'react'
import { AppContext } from '../App';

function Login() {
    const {setUsername} = useContext(AppContext);

  return (
        <div>
            <h1>Login</h1>
            <div class="canvas">
            <input onChange={(event) => {
            setUsername(event.target.value);
            }}/>
                <button class="button purple"><span>Login Button</span></button>
                <button class="button purple"><span>Signup Button</span></button>
            </div>
        </div>
    
  );
};

export default Login;