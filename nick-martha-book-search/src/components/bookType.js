import React from 'react'

function BookType (props) {
  return (
    <form onSubmit={props.handleBookTypeForm}>
      <label>Book Type: </label>
      <select onChange={props.handleFilterChange} name="bookType">
        <option value="ebooks">eBook</option>
        <option value="free-ebooks">Free-eBooks</option>
        <option value="full">Full</option>
        <option value="paid-ebooks">Paid-eBooks</option>
        <option value="partial">Partial</option>
    </select>
    <input type="submit" value="Submit" />
    </form>
  )
}

export default BookType