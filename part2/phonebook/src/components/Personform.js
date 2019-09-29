import React from 'react'


const Personform = ({name, number, onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <div>
            name: <input
                value={name.value}
                onChange={name.handleName}
            />
            </div>
            <div>
            number: <input
                value={number.value}
                onChange={number.handleNumber}
            />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Personform;