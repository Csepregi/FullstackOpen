import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  const addName = (event) => {
    event.preventDefault()
      const nameObject = {
        name: newName,
        number: newNumber
      }
      persons.forEach(person => {
        if(newName === person.name){
          alert(`${newName} already exists in the phonebook`)
        } else {
          setPersons(persons.concat(nameObject))
          setNewName('')
          setNewNumber('')
        }
      });  
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (e) => {
    setSearchName(e.target.value);
   
  }

  const displayNames = searchName === ''
      ? persons
      : persons.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase()));

  const rowsName = () => displayNames.map(person => 
    <li key={person.name}>
      <p>{person.name}<span> {person.number}</span></p>
      </li> 
    )


  return (
    <div>
      <div>
          search: <input
            value={searchName}
            onChange={handleSearchInput}
          />
        </div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameInput}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberInput}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul><p>{rowsName()}</p></ul>
    </div>
  )
}

export default App