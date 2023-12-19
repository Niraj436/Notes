import React from 'react'

export const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <i className="bi bi-search fs-6 "></i>
        <input onChange={(e)=>{handleSearchNote(e.target.value)}} className="input-search"type="text" placeholder='Type to search' />
    </div>
  )
}
