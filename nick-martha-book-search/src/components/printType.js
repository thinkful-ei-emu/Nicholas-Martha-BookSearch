import React from 'react'

function PrintType (props) {
  return (
    <form onSubmit={props.handlePrintTypeForm} className="print-filter">
    <label>Print Type: </label>
    <select onChange={props.handleChange} value={props.printFilter} name="printType">
      <option name="printType" value="all">All</option>
      <option name="printType" value="books">Book</option>
      <option name="printType" value="magazines">Magazine</option>
    </select>
    <input type="submit" value="Submit" className="filter-button"/>
    </form>
  )
}

export default PrintType