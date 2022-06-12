import React from 'react'
import search from "../../assets/images/search.svg"

function SearchBar({ onInputChange }) {
  return (
    <div className='search-bar input'>
      <input
        className='search-input'
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        placeholder=" chercher"
      />
      <img src={search} alt="search" />
    </div>
  )
}

export default SearchBar