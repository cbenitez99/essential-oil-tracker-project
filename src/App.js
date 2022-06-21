import Home from "./components/Home";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import React, {useState, useEffect} from "react";

function App() {

  const [oils, setOils] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/oils")
    .then(resp => resp.json())
    .then(data => {
      setOils(data)
    })
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<Home oils={oils} />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
}
export default App;