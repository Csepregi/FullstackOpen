import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]);

  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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