import {createContext, useState} from 'react';

export const LoginContext = createContext(null);

function Login() {
    const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={{user, setUser}} >
        <div>
            
        </div>
    </LoginContext.Provider>
    
  );
};

export default Login;