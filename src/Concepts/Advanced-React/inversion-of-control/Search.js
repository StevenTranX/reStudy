import React from 'react';
import { useDropdown } from './dropdown-context';

const Search = (props) => {
  const { onChange, inputPlaceholder } = useDropdown();
  return (
    <input
      type='text'
      placeholder={inputPlaceholder}
      className='p-4 outline-none w-full border border-gray-100'
      onChange={onChange}
    />
  );
};

export default Search;
