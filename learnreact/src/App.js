import React, { useState } from 'react'
import useUsersData from './hooks/useUsersData';
import { useTemptest } from './components/useTemptest';

function App() {
  const [users, error] = useTemptest("https://jsonplaceholder.typicode.com/users");
  console.log(users, "error")
  return (
    <div>
        {users.map((user)=>{
            return(
                <div key={user.id}>
                    <table>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    </table>
                </div>
            )
        })}
    </div>
  )
}

export default App