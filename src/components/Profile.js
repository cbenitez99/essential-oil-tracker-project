import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const {user, oils} = useContext(AppContext);

  let navigate = useNavigate();

  const handleAddOil = () => {
    
  };
  
  return (
    <div>
        <h1>Hello {user.username}</h1>
        <h2>Add Products: {oils.map((oil)=><li key={oil.id}>{oil.name} <button onClick={handleAddOil}>+</button></li>)}</h2>
        <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
    
  );
};

export default Profile;