import React from 'react';
import { useAccordion } from './accordion-context';

const AccordionHeader = ({ children }) => {
  const { handleToggle } = useAccordion();
  return (
    <>
      <div
        onClick={handleToggle}
        className='header font-bold mx-auto border border-gray-700 w-full h-full p-3 shadow-md'
      >
        {children}
      </div>
    </>
  );
};

export default AccordionHeader;
