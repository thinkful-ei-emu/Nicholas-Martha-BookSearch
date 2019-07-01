import React from 'react';
import PrintType from './printType.js';
import BookType from './bookType.js';

function FilterBar () {
  return ( 
    <div>
      <PrintType />
      <BookType />
    </div>
  )
}

export default FilterBar