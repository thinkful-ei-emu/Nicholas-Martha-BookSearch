import React from 'react';

function DisplayList(props){
   console.log(props.books)
   const listItem = props.books.map((book, index) => {
       return <div key={index}>
           <h2>{book.volumeInfo.title}</h2>
           <p>Author:{book.volumeInfo.authors}</p>
           <p>{book.volumeInfo.description}</p>
       </div>
   })
   
    return (
        <div>
            {listItem}
        </div>
   )
}

export default DisplayList;