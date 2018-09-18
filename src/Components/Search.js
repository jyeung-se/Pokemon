import React from 'react'

const Search = props => {
  // console.log('Search props are ', props)

  return (
    <div>
      <input type="text"
        placeholder={"Search by Name"}
        onChange={props.handleChange}
        value={props.searchInput}
      />
    </div>
  )
}

export default Search
