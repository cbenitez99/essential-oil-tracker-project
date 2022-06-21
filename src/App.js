import Home from "./components/Home";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import React, {useState, useEffect, createContext} from "react";
export const AppContext = createContext(null);


function App() {
  const [username, setUsername] = useState("");

  const [oils, setOils] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/oils")
    .then(resp => resp.json())
    .then(data => {
      setOils(data)
    })
  }, [])
  
  return (
    <AppContext.Provider value={{username, setUsername}}>
      <Routes>
        <Route index path="/" element={<Home oils={oils} />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </AppContext.Provider>

  );
}
export default App;