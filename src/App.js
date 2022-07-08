import Home from "./components/Home";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import React, {useState, createContext} from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
export const AppContext = createContext(null);


function App() {
  const [user, setUser] = useState("");

  
  
  return (
    <AppContext.Provider value={{user, setUser}}>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<Signup />}/>

      </Routes>
    </AppContext.Provider>

  );
}
export default App;