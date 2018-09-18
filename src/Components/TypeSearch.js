import React from 'react'

const TypeSearch = props => {
  // console.log('TypeSearch props are ', props)

  return (
    <div>
      <input type="text"
        placeholder={"Search by Type"}
        onChange={props.handleTypeChange}
        value={props.typeInput}
      />
    </div>
  )
}

export default TypeSearch
