import {createContext, useState} from 'react';

export const LoginContext = createContext(null);

function Login() {
    const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={{user, setUser}} >
        <div>
            <h1>Login</h1>
            <form className='canvas'>
                <input className='button purple'/>
            </form>
        </div>
    </LoginContext.Provider>
    
  );
};

export default Login;