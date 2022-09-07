import {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';


function EditOil({amount, oil_id}) { //oil_id is undefined
    const {user} = useContext(AppContext);

    const [counter, setCounter] = useState();
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let params = {
            ...amount,
            amount: counter
        }
        fetch(`/user_oils/${oil_id}`, { //need correct oil_id here
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
          if(resp.ok){
            alert("Amount Changed!")
            navigate(`/users/${user.id}`)
        } else {
            resp.json()
            .then(json => setErrors(json.errors));
        }});
    };

  return (
    <div className='edit-oil-div'>
        <h1>New Quantity</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setCounter(e.target.value)} min="0" type="number"/>
            <button type='submit'>ok</button>
            <button type='reset' onClick={()=>navigate(`/users/${user.id}`)}>Cancel</button>
            {errors ? <p>{errors}</p> : null}
        </form>
    </div>
  );
};

export default EditOil;