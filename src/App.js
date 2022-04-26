
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data => setUsers(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name, email};

    //Post Data to server
    fetch('', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

  }

  return (
    <div className="App">
      <h1>My Own DATA: {users.length}</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='name' required/>
        <input type="text" name='email' placeholder='email' required/>
        <input type="submit" value="Add User" />
      </form>

      <ul>
        {
          users.map(user=> <li key={user.id}>{user.id},{user.name}, {user.email}, {user.phone}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
