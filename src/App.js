import Home from "./components/Home";
import {Routes, Route, useNavigate} from "react-router-dom"
import Login from "./components/Login";
import Profile from "./components/Profile";
import React, {useEffect, useState, createContext} from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import './App.css';
import AddOil from "./components/AddOil";
import EditOil from "./components/EditOil";
export const AppContext = createContext(null);


function App() {
  const [user, setUser] = useState("");
  const [product, setProduct] = useState([]);
  const [oilName, setOilName] = useState("");
  const [oilPrice, setOilPrice] = useState(null);
  const [oilQuantity, setOilQuantity] = useState();
  const [errors, setErrors] = useState(null);
  let navigate = useNavigate();


  useEffect(() => {
    fetch("/products")
    .then(resp => resp.json())
    .then(data => {
      setProduct(data)
    })
  }, []);

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      // setUserOil(userData.user_oils);
      console.log(userData.user_oils)
    })
  }, [user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/user_oils",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: oilName, price: oilPrice, amount: oilQuantity, user_id: user.id})
    })
    .then(resp => {
      if(resp.ok){
        setErrors(null);
        alert("Product Added!");
        navigate(`/users/${user.id}`);
      } else {
        resp.json()
        .then((json) => {
          setErrors(json.errors);
        });
      }
    });
  };

  
  
  return (
    <AppContext.Provider value={{user, setUser, product, errors, setOilName, setOilPrice, setOilQuantity, handleSubmit}}>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/add_oil" element={<AddOil/>}/>
        <Route path={`/edit_oil/`} element={<EditOil/>}/>
        <Route path={`/users/${user.id}`} element={<Profile/>}/>
      </Routes>
    </AppContext.Provider>

  );
}
export default App;