import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserToListHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username, age, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserToListHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
