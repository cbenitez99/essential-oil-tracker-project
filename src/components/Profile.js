import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import './css/profile.css'
import OilCard from './OilCard';

function Profile({stockPrice, setStockPrice}) {

  const {user} = useContext(AppContext);
  const [userOil, setUserOil] = useState([]);
  const [errors, setErrors] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      setUserOil(userData.user_oils);
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
    <div className='profile-page-div'> 
      <h1>{user.username}'s Oil Inventory, Total Stock Price: ${stockPrice}</h1> 
      <OilCard setTotalPrice={setStockPrice} userOil={userOil} deleteOil={deleteOil}/>
      {errors ? <p style={{color : "black"}}>{errors}</p> : null}
      <button onClick={()=>{navigate("/add_oil")}}>Add New Oil</button>
      <button onClick={()=>{navigate("/home")}}>Back</button>
    </div>
  );
};

export default Profile;