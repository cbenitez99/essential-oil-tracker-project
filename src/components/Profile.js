import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const {user, oils} = useContext(AppContext);
  const [userOil, setUserOil] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      console.log(userData)
        // setUserOil(userData.oils)
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
          setUserOil({...prev => userOil[prev.oils]})
            alert(`Removed`)
        } else {
            alert(`Oh no, something went wrong!`)
        }
    })
  };
  //<button onClick={()=>handleAddOil(oil.id)}>+</button>
  
  return (
    <div>
        <h1>Hello {user.username}</h1>
        <h2>Add Products To Cart: {oils.map((oil)=><li key={oil.id}>{oil.name}<button onClick={()=>deleteOil(oil.id)}>Remove Oil</button></li>)}</h2>
      
        <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
    
  );
};

export default Profile;