import React, { useEffect, useState } from 'react'
export default function Effect() {
  const [users, setUsers] = useState([]);
  const [filetrByUsers, setFilterByUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    setFilterByUsers(users)
  }, [users])

  const change = (event) => {
    const filter = users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    
    setFilterByUsers(filter)
  }
  return (
    <div>
      <input type='text' onInput={change} />
      {filetrByUsers.map(
        user => <h2 key={user.id}>
          {user.name} <br></br>
          {user.username}<br></br>
          {user.email}<br></br>
          {user.address.city}</h2>
      )}
    </div>
  )
}


