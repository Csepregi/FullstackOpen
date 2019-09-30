import React from 'react'

const Filter = ({searchCountry, handleSearch}) => {
    return(
        <div>
          search: <input
            value={searchCountry}
            onChange={handleSearch}
          />
        </div>
    )
}

export default Filter;