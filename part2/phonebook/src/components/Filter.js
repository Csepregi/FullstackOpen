import React from 'react'

const Filter = ({searchName, handleSearch}) => {
    return(
        <div>
          search: <input
            value={searchName}
            onChange={handleSearch}
          />
        </div>
    )
}

export default Filter;