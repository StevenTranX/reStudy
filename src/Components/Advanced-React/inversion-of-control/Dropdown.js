import React, { useState } from "react";

const Dropdown = ({
  options,
  placeholder = "Please select an option",
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
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        onClick={handleToggleDropdown}
        className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded"
      >
        {placeholder}
      </div>
      {show && (
        <div className="opstions border border-gray-300 rounded">
          <div className="p-2">
            {visibleSearch && (
              <input
                type="text"
                placeholder={inputPlaceHolder}
                className="p-4 outline-none w-full border border-gray-100"
                onChange={onChange}
              />
            )}
          </div>

          {options.length > 0 &&
            options &&
            options.map((option) => (
              <div
                key={option.title}
                onClick={option.onClick}
                className="option-item p-4 cursor-pointer flex items-center justify-between"
              >
                <span>{option.title}</span>
                {visibleIconCheck && (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
