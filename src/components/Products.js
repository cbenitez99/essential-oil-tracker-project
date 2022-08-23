import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {product} = useContext(AppContext);
    // let navigate = useNavigate();

  return (
    <div className='products-page'>
      Global Essential Oil Products:
      {product.map((prod)=>(<li style={{color : "mistyrose"}} key={prod.id}>{prod.name}, ${prod.price} <br/> {prod.image}</li>))}
      {/* <button onClick={()=>{navigate("/home")}}>Back</button> */}
    </div>
  );
};

export default Products;