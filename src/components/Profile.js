import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import './css/profile.css'
import AddOil from './AddOil';
import EditOil from './EditOil';

function Profile() {

  const {user} = useContext(AppContext);
  const [oilName, setOilName] = useState("");
  const [oilPrice, setOilPrice] = useState(null);
  const [oilQuantity, setOilQuantity] = useState();
  const [userOil, setUserOil] = useState([]);
  const [errors, setErrors] = useState(null);
  const [edit, setEdit] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      setUserOil(userData.user_oils);
      setEdit(false)
    })
  }, [user.id]);

  const deleteOil = (oil_id) => {
    let removedOil = userOil.filter((oil) => oil.id !== oil_id);
    setUserOil(removedOil);
    fetch(`/user_oils/${oil_id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
    .then(resp => {
        if(!resp.ok){
          setErrors("Something went wrong.");
        }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let params = {name: oilName, price: oilPrice, amount: oilQuantity, user_id: user.id};
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
        navigate('/products');
      } else {
        resp.json()
        .then((json) => {
          setErrors(json.errors);
        });
      }
    });
  };


  return (
    <div className='profile-page'>
      <h1>Hello {user.username}</h1>
      <div><h1>Your Inventory:</h1>{
      userOil.map((oil)=>(
        <div key={oil.id}>
          <h3>{oil.name} ${oil.price}</h3>
          <h4>Quantity: {oil.amount}</h4>
          <button onClick={()=>{setEdit(true)}}>Edit Amount</button>
          <button onClick={()=>deleteOil(oil.id)}>Remove Oil</button>
          <br/>
          {edit ? <EditOil setEdit={setEdit} amount={oil.amount} id={oil.id}/> : null}
        </div>))}
      </div>
      {errors ? <p style={{color : "black"}}>{errors}</p> : null}
      <br/>
      <button onClick={()=>{navigate("/home")}}>Back</button>
      <AddOil setOilName={setOilName} setOilQuantity={setOilQuantity} setOilPrice={setOilPrice} handleSubmit={handleSubmit}/>      
    </div>
  );
};

export default Profile;