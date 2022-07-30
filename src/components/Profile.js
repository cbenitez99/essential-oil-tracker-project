import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const {user} = useContext(AppContext);
  // const {id} = useParams();
  const [oilName, setOilName] = useState("");
  const [oilPrice, setOilPrice] = useState(null);
  const [oilAmount, setOilAmount] = useState(null);
  const [userOil, setUserOil] = useState([]);
  const [errors, setErrors] = useState(null)

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then((resp) => (resp.json()))
    .then(userData => {
      setUserOil(userData.user_oils)
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
        if(!resp.ok){
          setErrors("Something went wrong.")
        }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let params = {name: oilName, price: oilPrice, amount: oilAmount, user_id: user.id}
    fetch("/user_oils", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(params)
    })
      .then(resp => {
        if(resp.ok){
          setErrors(null)
          alert("Product Added!")
          navigate('/products')
        } else {
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
      <div>Your Inventory:
        {
      userOil.map((oil)=>(
        <p key={oil.id}>
          {oil.name} {" "} | ${oil.price} {""} | Quantity: {oil.amount}
          <br/>
          <button onClick={()=>deleteOil(oil.id)}>Remove Oil</button>
        </p>))
        }
      </div>
      {errors ? <p style={{color : "red"}}>{errors}</p> : null}
      <button onClick={()=>{navigate("/")}}>Back</button>
      <br/>
      <h2>Add Oil</h2>
      <form onSubmit={handleSubmit}>  
        <input onChange={(e) => setOilName(e.target.value)} placeholder="Name"/><br/>
        <input onChange={(e) => setOilPrice(e.target.value)} placeholder="Price"/>
        <br/>
        <label>Amount</label>
        <input onChange={(e) => setOilAmount(e.target.value)} min="0" max="999" type="number"/>
        <br/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default Profile;