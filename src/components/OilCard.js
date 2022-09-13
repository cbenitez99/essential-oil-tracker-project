import React from 'react'
import { useNavigate } from 'react-router-dom'

function OilCard({userOil, deleteOil }) {
 let navigate = useNavigate();
  return (
    <div>
        {userOil.map((oil)=>(
        <div className='oil-card' key={oil.id}>
          <h3>{oil.name} ${oil.price}</h3>
          <h4>Quantity: {oil.amount}</h4>
          <h5>Total: ${oil.price * oil.amount}</h5>
          <button onClick={()=>{navigate(`/edit_oil/${oil.id}`)}}>Edit Amount</button>
          <button onClick={()=>deleteOil(oil.id)}>Remove Oil</button>
        </div>))}
    </div>
  )
}

export default OilCard