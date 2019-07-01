import React from 'react';
import './styles/search-bar.css'

function SearchBar (props) {
return (
  <div className="search-bar">
    <form onSubmit={props.handleSearchSubmit}>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" name="search" placeholder="books..." required></input> 
      <button className="search-button">Search</button>
    </form>
  </div>
  )
}


export default SearchBar

