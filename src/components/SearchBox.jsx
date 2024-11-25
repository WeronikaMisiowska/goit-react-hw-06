import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
