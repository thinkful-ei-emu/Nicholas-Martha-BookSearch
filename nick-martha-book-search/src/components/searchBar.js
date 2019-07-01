import React from 'react'

function SearchBar () {
  return (
    <form>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" name="search" placeholder="books..."></input> 
      <button>Search</button>
    </form>
  )
}

export default SearchBar