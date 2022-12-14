import React from 'react';
import { useDropdown } from './dropdown-context';

const Option = ({ children }) => {
  const context = useDropdown();
  return (
    <div
      onClick={() => {
        context.onClick(children);
      }}
      className='option-item p-4 cursor-pointer flex items-center justify-between'
    >
      {children}
    </div>
  );
};

export default Option;
