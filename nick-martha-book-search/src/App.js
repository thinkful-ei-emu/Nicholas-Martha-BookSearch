import React from 'react';
import './App.css';
import Header from './components/header.js';
import SearchBar from './components/searchBar.js';
import FilterBar from './components/filterBar.js'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FilterBar />
    </div>
  );
}

export default App;
