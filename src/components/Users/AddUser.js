import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non empty values)' })
      return
    }
    if (Number(age) < 1) {
      setError({ title: 'Invalid input', message: 'Please enter a valid age (greater than 0)' })
      return
    }
    props.onAddUser(username, age)
    setUsername('')
    setAge('')
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const errorhandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
