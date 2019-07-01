import React from 'react';
import PrintType from './printType.js';
import BookType from './bookType.js';

function FilterBar (props) {
  return ( 
    <div>
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