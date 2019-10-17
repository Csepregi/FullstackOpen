import React, { useState, useEffect, useCallback, useRef } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'
import servicePhone from './services/phone'
import NotificationList from "./components/NotificationList";



const App = () => {

  const notificationsRef = useRef(null);
  // these 2 callbacks will hide that the ref is used
  // and they will make the usage more expressive
  const showError = useCallback(m => notificationsRef.current.showError(m), [
    notificationsRef
  ]);
  
  const [ persons, setPersons] = useState([]);

  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    servicePhone
      .getAll()
      .then(initialPhones => {
        setPersons(initialPhones)
      })
  }, [])

  const checkHandleValidationError = error => {
    if (error.isAxiosError && error.response && error.response.status === 400) {
      showError(
        (error.response.data && error.response.data.error) || error.message
      );
      return true;
    }
    return false;
  };

  const addName = (event) => {
    event.preventDefault()
    const same = persons.filter(person => person.name === newName);
    // if(same) {
    //   alert(`${newName} already exists`);
    //   return
    // }
    if (checkUpdateNumber()) {
      return;
    }
      const nameObject = {
        name: newName,
        number: newNumber
      }
          servicePhone
            .create(nameObject)
            .then(response => {
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        })
          .catch(error => {
            if (!checkHandleValidationError(error)) {
              showError(`Failed to add ${nameObject.name}. ${error}`);
            }
        })
      };  

        const checkUpdateNumber = () => {
          const p = persons.find(p => p.name === newName);
          if (!p) {
            return false;
          }
          if (
            !window.confirm(
              `${newName} is already in the phonebook.\nDo you want to update the number?`
            )
          ) {
            return false;
          }
          const id = p.id;
          servicePhone
            .update(id, { ...p, number: newNumber })
            .then(updatedPerson => {
              setPersons(persons.map(p => (p.id !== id ? p : updatedPerson)));
              setNewName("");
              setNewNumber("");
            })
          return true;
        };

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (e) => {
    setSearchName(e.target.value);
  }

      
      const deletePerson = (id, name) => {
        return () => {
          if (window.confirm(`Delete ${name}`)) {
            servicePhone.remove(id, name).then(() => {
              setPersons(persons.filter(person => person.id !== id))
            })
          }
        }
        }

  return (
    <div>
      <NotificationList ref={notificationsRef} />
      <h2>Phonebook</h2>
      <Filter value={searchName} handleSearch={handleSearchInput}/> 
      <Personform onSubmit={addName}
        name={{value: newName, handleName: handleNameInput}}
        number={{value: newNumber, handleNumber: handleNumberInput}}
      />
      <Persons
        persons={persons}
        searchText={searchName}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App