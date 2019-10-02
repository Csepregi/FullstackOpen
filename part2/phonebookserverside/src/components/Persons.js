import React from 'react'

// const Persons = ({persons}) => {
//     console.log(persons)
//     return(
//         <div>
//         <h2>Numbers</h2>
//         <ul><p>{persons}</p></ul>
//         </div>
//     )
// }
const Persons = ({ persons, searchText, deletePerson }) => (
    <>
      <ul>
        {persons
          .filter(
            person =>
              person.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
          )
          .map(person => (
            <li key={person.name}>
              {person.name} {person.number}
              <button onClick={deletePerson(person.id, person.name)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  )

export default Persons