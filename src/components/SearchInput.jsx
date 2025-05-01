import React from 'react';
import './SearchInput.css';


export const SearchInput = ({ placeholder }) => {
  return (
    <div className="search-container">
      <span className="search-icon"></span>
      <input 
        type="text" 
        className="search-input"
        placeholder={placeholder}
      />
    </div>
  );
};