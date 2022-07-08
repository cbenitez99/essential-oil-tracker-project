import React, {useContext} from 'react';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {oils} = useContext(AppContext)


  return (
    <div className='products-page'>
        Essential Oil Products
        <li>{console.log(oils)}</li>
    </div>
  );
};

export default Products;