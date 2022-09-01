import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import './css/profile.css'
import EditOil from './EditOil';

function Profile() {

  const {user} = useContext(AppContext);
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

  return (
    <div className='profile-page'>
      <div> 
        <h1>Hello {user.username}Your Inventory:</h1> { 
        userOil.map((oil)=>(
        <div key={oil.id}>
          <h3>{oil.name} ${oil.price}</h3>
          <h4>Quantity: {oil.amount}</h4>
          <button onClick={navigate(`/edit_oil/${oil.id}`)}>Edit Amount</button>
          {edit ? <EditOil setEdit={setEdit} amount={oil.amount} id={oil.id}/> : null}
          <button style={{color: 'RED' }} onClick={()=>deleteOil(oil.id)}>Remove Oil</button>
          <br/>
        </div>))}
      </div>
      {errors ? <p style={{color : "black"}}>{errors}</p> : null}
      <br/>
      <button style={{color: "greenyellow" }} onClick={()=>{navigate("/add_oil")}}>Add New Oil</button>
      <button onClick={()=>{navigate("/home")}}>Back</button>
    </div>
  );
};

export default Profile;