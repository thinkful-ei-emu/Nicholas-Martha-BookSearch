import React from 'react'

function BookType () {
  return (
    <form>
      <label>Book Type: </label>
      <select name="bookType">
        <option value="ebook">eBook</option>
        <option value="free-ebooks">Free-eBooks</option>
        <option value="full">Full</option>
        <option value="paid-ebooks">Paid-eBooks</option>
        <option value="partial">Partial</option>
    </select>
    </form>
  )
}

export default BookType