import React from 'react'

function AddOil({setOilName, setOilPrice, setOilQuantity, handleSubmit}) {
  return (
    <div>
        <h2>Add Oil</h2>
        <form onSubmit={handleSubmit}>  
            <input onChange={(e) => setOilName(e.target.value)} placeholder="Name"/><br/>
            <input onChange={(e) => setOilPrice(e.target.value)} type="number" placeholder="Price" />
            <br/>
            <label>Quantity</label>
            <input onChange={(e) => setOilQuantity(e.target.value)} type="number"/>
            <br/>
            <button onClick={()=>handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddOil