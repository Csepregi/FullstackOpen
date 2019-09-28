import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('');

  const addName = (event) => {
    event.preventDefault()
      const nameObject = {
        name: newName
      }
    
      setPersons(persons.concat(nameObject))
      setNewName('')
  }

  const handleNotChange = (event) => {
    setNewName(event.target.value)
  }

  const rows = () => persons.map(person => 
    <li key={person.name}>
      {person.name}
      </li> 
    )
  

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNotChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{rows()}</div>
    </div>
  )
}

export default App