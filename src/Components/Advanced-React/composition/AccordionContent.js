import React from 'react';
import { useAccordion } from './accordion-context';

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <>
      {show && (
        <div className='mt-5 text-purple-600 text-3xl font-semibold'>
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionContent;
