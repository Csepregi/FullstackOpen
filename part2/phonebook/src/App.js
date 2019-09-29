import React, { useState } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'

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
      <h2>Phonebook</h2>
      <Filter value={searchName} handleSearch={handleSearchInput}/> 
      <Personform onSubmit={addName}
        name={{value: newName, handleName: handleNameInput}}
        number={{value: newNumber, handleNumber: handleNumberInput}}
      />
      <Persons persons={rowsName()}/>
    </div>
  )
}

export default App