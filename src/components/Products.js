import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import "./css/productpage.css";

function Products() {
    const {product} = useContext(AppContext)
    // const {oil_id} = useParams(); useParams
    // const [amount, setAmount] = useState(0); //--> make a counter no less than 0 no more than 999!
    // const [errors, setErrors] = useState("");


    let navigate = useNavigate();

    // const addToUserOils = (oil_id) => {

    //     e.preventDefault()
    //     let params = {
    //       ...oilData
    //     }
    //     fetch(`/user_oils/${oil_id}`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(params)
    //     })
    //     .then(resp => {
    //         if(resp.ok){
    //             resp.json()
    //             .then((json) => {
    //                 setUser(json)
    //                 navigate(`/`)
    //             })
    //         } else {
    //             resp.json()
    //             .then((json) => {
    //                 setErrors(json.errors)
    //             })
    //         }
    //     });
    // };<button onClick={()=>addToUserOils(prod.id)}>+</button>


  return (
    <div className='products-page'>
        Essential Oil Products:
        {product.map((prod)=>(<li style={{color : "mistyrose"}} key={prod.id}>{prod.name}, ${prod.price} <br/> {prod.image}</li>))}
        {/* {errors ? <p style={{color: "black"}}>{errors}</p> : null} */}
        <button onClick={()=>{navigate("/")}}>Back</button>

    </div>
  );
};

export default Products;