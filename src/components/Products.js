import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {user, product} = useContext(AppContext);
    let navigate = useNavigate();
  if(user){
    return (
      <div className='products-page'>
        Global Essential Oil Products:
        {product.map((prod)=>(<li style={{color : "mistyrose"}} key={prod.id}>{prod.name}, ${prod.price} <br/> {prod.image}</li>))}
        <button onClick={()=>{navigate("/home")}}>Back</button>
      </div>
    )
  } else {
    return (
      <div className='products-page'>
        Global Essential Oil Products:
        {product.map((prod)=>(<li style={{color : "mistyrose"}} key={prod.id}>{prod.name}, ${prod.price} <br/> {prod.image}</li>))}
        <button onClick={()=>{navigate("/")}}>Back To Login</button>
      </div>
    )
  }
};

export default Products;