import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';

const Filter = () => {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Filter contacts"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;
