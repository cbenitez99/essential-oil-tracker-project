import React, {useContext} from 'react';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {oils} = useContext(AppContext)


  return (
    <div className='products-page'>
        Essential Oil Products
        {oils.map((oil)=>(<li>{oil.name}, ${oil.price}</li>))}
    </div>
  );
};

export default Products;