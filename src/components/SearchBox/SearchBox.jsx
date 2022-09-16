import React from 'react';
import "./SearchBox.scss";

const SearchBox = ({getSearchBoxValue}) => {
  return (
    <input className='input' placeholder='Search by name' type="text" onChange={getSearchBoxValue}/>
    )
}

export default SearchBox