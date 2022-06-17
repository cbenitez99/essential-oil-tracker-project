import './App.css';
import {useState} from 'react';
import Login from './components/Login';
import { Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  };
  // <button onClick={fetchData}>Grab Data</button>
  //     {data.map((data)=>(<h1>{data.name}: ${data.price}</h1>))}

  return (
    <main>
      <Route>
        <Route exact path="/login" element={{}}/>
      </Route>
    </main>
    
  );
}

export default App;
