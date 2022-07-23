import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const {user} = useContext(AppContext);
  const [userOil, setUserOil] = useState([]);
  const [errors, setErrors] = useState(" ")

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      setUserOil(userData.user_oils)
        // setUserOil(userData)
    })
}, [user.id])

  const deleteOil = (id) => {
    let removedOil = userOil.filter((oil) => oil.id !== id)
    setUserOil(removedOil)
    fetch(`/user_oils/${id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
    .then(resp => {
        if(resp.ok){
          setTimeout(setErrors("Oil Removed"), 3)
          console.log(errors)
          // navigate(`/`)
        } else {
          setErrors("No bueno!")
          alert(`Oh no, something went wrong!`)
        }
    })
  };
  
  return (
    <div>
        <h1>Hello {user.username}</h1>
        <h2>Your Inventory: {userOil.map((oil)=><li key={oil.id}>{oil.name}<button onClick={()=>deleteOil(oil.id)}>Remove Oil</button></li>)}</h2>
        {errors ? <p style={{color : "black"}}>{errors}</p> : null}
        <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
    
  );
};

export default Profile;