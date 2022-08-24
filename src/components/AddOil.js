import React from 'react'
import './css/oilAdd.css'

function AddOil({setOilName, setOilPrice, setOilQuantity, handleSubmit}) {
  return (
    <div className='add-oil'>
        <h2>New Oil</h2>
        <form onSubmit={handleSubmit}>  
            <input onChange={(e) => setOilName(e.target.value)} placeholder="Name"/>
            <input onChange={(e) => setOilPrice(e.target.value)} type="number" placeholder="Price" />
            <input onChange={(e) => setOilQuantity(e.target.value)} placeholder="Quantity" type="number"/>
            <button onClick={()=>handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddOil