import React from 'react';
import './App.css';
import Header from './components/header.js';
import SearchBar from './components/searchBar.js';
import FilterBar from './components/filterBar.js';
import DisplayList from './components/displayList.js';

class App extends React.Component{
  constructor(){
    super()
  this.state = {
      books: [],
      searchTerm: '',
      printFilter: '',
      bookFilter: ''
  }
}

handleSearchSubmit = (e) => {
  e.preventDefault();
  this.setState ({
    searchTerm : e.target.search.value
  })
  const url = `https://www.googleapis.com/books/v1/volumes?q=${e.target.search.value}`;
  fetch(url)
  .then(res => res.json())
  .then(books => this.setState({
    books: books.items
  }))
}

handleChange = (e) => {
  this.setState({
    printFilter: e.target.value
  })
}

handleFilterChange = (e) => {
  this.setState({
    bookFilter: e.target.value
  })
}

handlePrintTypeForm = (e) => {
  e.preventDefault();
  const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${e.target.printType.value}`;
  fetch(url)
  .then(res => res.json())
  .then(books => this.setState({
    books: books.items
  }))
}

handleBookTypeForm = (e) => {
  e.preventDefault();
  const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${e.target.bookType.value}`;
  fetch(url)
  .then(res => res.json())
  .then(books => this.setState({
    books: books.items
  }))
}

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
        <FilterBar 
          handlePrintTypeForm={this.handlePrintTypeForm}
          handleChange={this.handleChange}
          printFilter={this.state.printFilter}
          handleBookTypeForm={this.handleBookTypeForm}
          handleFilterChange={this.handleFilterChange}
        />
        <DisplayList books={this.state.books} />
      </div>
    );
  }
}

export default App;
