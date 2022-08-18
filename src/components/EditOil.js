import {useState} from 'react'

function EditOil({setEdit, id}) {

    const [counter, setCounter] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/user_oils/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({amount: counter})
        })
        .then(resp => {
          if(resp.ok){
            alert("success")
        } else {
            console.log("something went wrong")
        }});
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setCounter(e.target.value)} min="0" type="number"/>
            <button onClick={handleSubmit}>ok</button>
            <button onClick={() => {setEdit(false)}}>cancel</button>
            {console.log(counter)}
        </form>
    </div>
  )
}

export default EditOil