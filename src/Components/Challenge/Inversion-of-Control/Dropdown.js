import React, { useState } from 'react';
import { DropdownProvider } from '../../Advanced-React/inversion-of-control/dropdown-context';
const data = [
  {
    id: 1,
    title: 'Front End',
    onClick() {},
  },
  {
    id: 2,
    title: 'Back End',
    onClick() {},
  },
  {
    id: 3,
    title: 'Full Stack',
    onClick() {},
  },
];
const Dropdown = ({ children, placeholder, ...props }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <DropdownProvider {...props}>
      <div className='p-10 relative inline-block  w-full max-w-[500px] rounded shadow-emerald-200'>
        <div
          onClick={handleToggle}
          className='border border-gray-300 bg-slate-200 text-center w-full mb-2 p-3'
        >
          <span className='text-2xl font-medium cursor-pointer '>
            {placeholder}
          </span>
          {/* <Dropdown.InputDropdown></Dropdown.InputDropdown> */}
        </div>
        {children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
