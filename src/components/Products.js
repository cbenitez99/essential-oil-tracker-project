import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {oils} = useContext(AppContext)
    let navigate = useNavigate();


  return (
    <div className='products-page'>
        Essential Oil Products
        {oils.map((oil)=>(<li key={oil.id}>{oil.name}, ${oil.price}</li>))}
        <button onClick={()=>{navigate("/")}}>Back</button>

    </div>
  );
};

export default Products;