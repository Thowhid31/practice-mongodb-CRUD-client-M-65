
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      <h1>My Own DATA: {users.length}</h1>

      <p>
        {
          users.map(user=> <li key={user.id}>{user.id},{user.name}, {user.email}, {user.phone}</li>)
        }
      </p>
    </div>
  );
}

export default App;
