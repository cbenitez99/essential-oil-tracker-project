import {useState} from 'react'


function EditOil({setEdit, id, amount}) {

    const [counter, setCounter] = useState();
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let params = {
            ...amount,
            amount: counter
        }
        fetch(`/user_oils/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
          if(resp.ok){
            setErrors("Amount Changed!")
        } else {
            setErrors("Can't be blank!")
        }});
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(`/user_oils/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({amount: counter})
    //     })
    //     .then((resp)=>(resp.json()))
    //     .then((data)=> {
    //         setUserOils(data)
    //         alert("Amount changed!")   
    //     });
    // };

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setCounter(e.target.value)} min="0" type="number"/>
            <button onClick={handleSubmit}>ok</button>
            <button onClick={() => {setEdit(false)}}>cancel</button>
            {errors ? <p>{errors}</p> : null}
        </form>
    </div>
  )
}

export default EditOil