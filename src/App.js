import './App.css';
import {useState} from 'react';

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

  return (
    <div className="App">
      <header className="App-header">
        Essential Oil Tracker
      </header>

      <button onClick={fetchData}>Grab Data</button>
      {data.map((data)=>(<h1>{data.name}: ${data.price}</h1>))}

    </div>
  );
}

export default App;
