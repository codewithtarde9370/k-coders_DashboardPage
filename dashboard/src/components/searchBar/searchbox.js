import React from 'react';
import { IoMdSearch } from "react-icons/io";



function SearchBox() {
  return (
    <div className='searchbox mx-xl-2'>
        <IoMdSearch />
        <input type='text' placeholder='Search Here'>
        </input>
    </div>
  )
}

export default SearchBox