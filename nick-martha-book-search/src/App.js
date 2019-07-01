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
      url: ''
  }
}

handleSearchTerm = (e) => {
  this.setState({
    searchTerm : e.target.value
  })
}

handleSearchSubmit = (e) => {
  e.preventDefault();
  this.setState({
    searchTerm : e.target.search.value
  })

}

componentDidMount(){
  this.setState({
    url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&key=AIzaSyCME-TYD-sAZP-aaKeXV23rd7RqZjRpH78`
  })
  console.log(this.state.url)
  fetch()
  .then(console.log('fetch works'))
  .then(res => res.json())
  .then(books => this.setState({
    books: books.items
  }))
}



  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearchTerm={this.handleSearchTerm} handleSearchSubmit={this.handleSearchSubmit} searchTerm={this.state.searchTerm}/>
        <FilterBar />
        {(this.state.searchTerm && <DisplayList books={this.state.books} />)}
      </div>
    );
  }
}

export default App;
