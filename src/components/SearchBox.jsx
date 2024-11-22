import React from 'react';

const SearchBox = ({ setSearchQuery }) => {
  return (
    <div className="search-box">
      <label>Find contacts by name:</label>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

