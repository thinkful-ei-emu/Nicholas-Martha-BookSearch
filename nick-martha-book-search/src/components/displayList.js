import React from 'react';
import './styles/display-list.css';

function DisplayList(props){
   console.log(props.books)
   const listItem = props.books.map((book, index) => {
       return <div key={index} className="result-container">
           <h2>{book.volumeInfo.title}</h2>
           <a href={book.volumeInfo.previewLink} target='_blank'><img className="result-img" src={book.volumeInfo.imageLinks.thumbnail} alt='book cover'></img></a>
           <p>Author: {book.volumeInfo.authors}</p>
           <p className="result-desc">{(book.searchInfo) ? book.searchInfo.textSnippet : 'No Description Found'}</p>     
           <p>{(book.saleInfo.listPrice) ?
                '$' + book.saleInfo.listPrice.amount : book.saleInfo.saleability.toLowerCase().replace(/_/g, ' ')
           } </p>
       </div>
   })
   
    return (
        <div>
            {listItem}
        </div>
   )
}

export default DisplayList;