import React from 'react'

function SearchBar (props) {
return (
    <form onSubmit={props.handleSearchSubmit}>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" name="search" placeholder="books..." required></input> 
      <button>Search</button>
    </form>
  )
}


export default SearchBar

