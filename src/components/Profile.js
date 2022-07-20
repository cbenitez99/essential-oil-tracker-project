import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const {user, oils} = useContext(AppContext);
  const [userOil, setUserOil] = useState([]);
  const [errors, setErrors] = useState(" ")

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      console.log(userData)
        // setUserOil(userData)
    })
}, [user.id])


  // const handleAddOil = (id) => {
  //   setUserOil()
  // };

  const deleteOil = (id) => {
    let removedOil = userOil.filter((oil) => oil.id !== id)
    setUserOil(removedOil)
    fetch(`/oils/${id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
    .then(resp => {
        if(resp.ok){
          setErrors("All good!")
          console.log(errors)
          navigate(`/`)
        } else {
          setErrors("No bueno!")
          alert(`Oh no, something went wrong!`)
        }
    })
  };
  //<button onClick={()=>handleAddOil(oil.id)}>+</button>
  
  return (
    <div>
        <h1>Hello {user.username}</h1>
        <h2>Your Inventory (connected to public rn): {oils.map((oil)=><li key={oil.id}>{oil.name}<button onClick={()=>deleteOil(oil.id)}>Remove Oil</button></li>)}</h2>
        {errors ? <p style={{color : "red"}}>{errors}</p> : null}
        <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
    
  );
};

export default Profile;