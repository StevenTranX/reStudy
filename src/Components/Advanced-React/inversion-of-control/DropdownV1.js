import React, { useState } from 'react';

const DropdownV1 = ({
  options,
  placeholder = 'Please select an option',
  inputPlaceHolder,
  visibleIconCheck = false,
  visibleSearch = false,
  onChange = () => {},
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className='relative inline-block w-full max-w-[300px]'>
      <div
        onClick={handleToggleDropdown}
        className='placeholder flex items-center justify-between p-4 border border-gray-300 rounded'
      >
        {placeholder}
      </div>
      {show && (
        <div className='opstions border border-gray-300 rounded'>
          <div className='p-2'></div>

          {options.length > 0 &&
            options &&
            options.map((option) => (
              <div
                key={option.title}
                onClick={option.onClick}
                className='option-item p-4 cursor-pointer flex items-center justify-between'
              >
                <span>{option.title}</span>
                {visibleIconCheck && <span></span>}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownV1;
