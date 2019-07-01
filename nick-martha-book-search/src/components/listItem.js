import React from 'react';

function ListItem(props) {
    console.log( props.books[0].volumeInfo)
    return (
        <div>
            <h2>Henry</h2>
            <p>Author:</p>
            <p>Price</p>
            <p>Description</p>
        </div>
    )

}

export default ListItem;