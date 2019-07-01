import React from 'react';

function DisplayList(props){
   console.log(props.books)
   const listItem = props.books.map((book, index) => {
       return <div key={index}>
           <h2>{book.volumeInfo.title}</h2>
           <p>Author:{book.volumeInfo.authors}</p>
           <p>{(book.searchInfo) ? book.searchInfo.textSnippet : 'No Description Found'}</p>
           <img src={book.volumeInfo.imageLinks.thumbnail} alt='book cover'></img>
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