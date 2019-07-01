import React from 'react';
import PrintType from './printType.js';
import BookType from './bookType.js';
import './styles/filter-controls.css';

function FilterBar (props) {
  return ( 
    <div className="filter-controls">
      <PrintType 
      handleChange={props.handleChange}
      handlePrintTypeForm={props.handlePrintTypeForm}
      printFilter={props.printFilter}
      handleFilterChange={props.handleFilterChange}
      />
      <BookType handleBookTypeForm={props.handleBookTypeForm}/>
    </div>
  )
}

export default FilterBar