import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {product} = useContext(AppContext)

    let navigate = useNavigate();

    const addToUserOils = () => {
      
    };


  return (
    <div className='products-page'>
        Essential Oil Products:
        {product.map((prod)=>(<li style={{color : "mistyrose"}} key={prod.id}>{prod.name}, ${prod.price} |{""}| Amount: {prod.amount}</li>))}

        <button onClick={()=>{navigate("/")}}>Back</button>

    </div>
  );
};

export default Products;