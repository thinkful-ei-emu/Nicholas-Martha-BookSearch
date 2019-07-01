import React from 'react'

function PrintType () {
  return (
    <form>
    <label>Print Type: </label>
    <select name="printType">
      <option value="book">Book</option>
      <option value="magazine">Magazine</option>
    </select>
    </form>
  )
}

export default PrintType