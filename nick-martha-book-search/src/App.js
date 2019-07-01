import React from 'react';
import './App.css';
import Header from './components/header.js';
import SearchBar from './components/searchBar.js';
import FilterBar from './components/filterBar.js';
import DisplayList from './components/displayList.js';

class App extends React.Component{

  state = {
      books: []
  }


componentDidMount(){
  fetch('https://www.googleapis.com/books/v1/volumes?q=henry&key=AIzaSyCME-TYD-sAZP-aaKeXV23rd7RqZjRpH78')
  .then(res => res.json())
  .then(books => this.setState({
    books: books.items
  }))
}



  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <FilterBar />
        <DisplayList books={this.state.books} />
      </div>
    );
  }
}

export default App;
