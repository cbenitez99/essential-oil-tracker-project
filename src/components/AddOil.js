import './css/oilAdd.css'
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';


function AddOil() {
  let navigate = useNavigate();
  const {user, setOilName, setOilPrice, setOilQuantity, handleSubmit, errors} = useContext(AppContext);
  return (
    <div className='add-oil'>
        <h2>New Oil</h2>
        <form onSubmit={handleSubmit}>  
            <input onChange={(e) => setOilName(e.target.value)} placeholder="Name"/>
            <input onChange={(e) => setOilPrice(e.target.value)} type="number" placeholder="Price" />
            <input onChange={(e) => setOilQuantity(e.target.value)} placeholder="Quantity" type="number"/>
            <p>{errors}</p>
            <button onClick={()=>handleSubmit}>Add</button>
            <button onClick={()=>navigate(`/users/${user.id}`)}>Back</button>

        </form>
    </div>
  )
}

export default AddOil