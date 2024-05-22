import React from 'react';
import './searchBar.css';
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({ value, onChange }) => {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search for an animal..."
        value={value}
        onChange={onChange}
        className="input"
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
