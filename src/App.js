import './App.css';
import {useState, createContext} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route } from 'react-router-dom';

export const UserContext = createContext(null);
function App() {
  // const {user} = useContext(LoginContext)
  const [user, setUser] = useState({});

  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch("http://localhost:3000")
  //   .then(resp => resp.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // };
  // <button onClick={fetchData}>Grab Data</button>
  //     {data.map((data)=>(<h1>{data.name}: ${data.price}</h1>))}

  return (
    <UserContext.Provider value={{user, setUser}} >
    <main>
      <Route>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path={`/users/${user.id}`} element={<Profile/>}/>
      </Route>
    </main>
    </UserContext.Provider>
    
  );
}

export default App;
