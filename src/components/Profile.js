import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const {user} = useContext(AppContext);
  const [oilName, setOilName] = useState("");
  const [oilPrice, setOilPrice] = useState(0);
  const [oilAmount, setOilAmount] = useState(0);


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
          setErrors("Oil Removed")
          // navigate(`/`)
        } else {
          setErrors("Something went wrong.")
          alert(`Oh no, something went wrong!`)
        }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let params = {
        name: oilName,
        price: oilPrice,
        amount: oilAmount,
        user_id: user.id
      }
    fetch("/user_oils", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(params)
      })
      .then(resp => {
        if(resp.ok){
          resp.json()
          .then((json) => {
            setErrors("Oil Added!")
            // navigate(`/`)
          })
        } else {
          alert(`Oh no, something went wrong!`)
          resp.json()
          .then((json) => {
            setErrors(json.errors)
        })
      }
    });
  };

  return (
    <div>
        <h1>Hello {user.username}</h1>
        <h2>Your Inventory: {userOil.map((oil)=><li key={oil.id}>{oil.name}<button onClick={()=>deleteOil(oil.id)}>Remove Oil</button></li>)}</h2>
        {errors ? <p style={{color : "black"}}>{errors}</p> : null}
        <button onClick={()=>{navigate("/")}}>Back</button>

        <br/>
        <h2>Add Oil</h2>
        <form onSubmit={handleSubmit}>  
          <input onChange={(e) => setOilName(e.target.value)} placeholder="Name"/><br/>
          <input onChange={(e) => setOilPrice(e.target.value)} placeholder="Price"/>
          <br/>
          <input onChange={(e) => setOilAmount(e.target.value)} min="0" type="number" placeholder="Amount"/>
          <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
    
  );
};

export default Profile;