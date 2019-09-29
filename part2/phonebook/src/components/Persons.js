import React from 'react'

const Persons = (props) => {
    return(
        <div>
        <h2>Numbers</h2>
        <ul><p>{props.persons}</p></ul>
        </div>
    )
}

export default Persons