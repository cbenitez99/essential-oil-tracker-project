import Home from "./components/Home";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import React, {useState, useEffect, createContext} from "react";
export const AppContext = createContext(null);


function App() {
  const [user, setUser] = useState("");

  const [oils, setOils] = useState([]);

  useEffect(() => {
    fetch("/oils")
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setOils(data)
    })
  }, [])
  
  return (
    <AppContext.Provider value={{user, setUser}}>
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