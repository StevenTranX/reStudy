import React from 'react';
import { AccordionProvider, useAccordion } from './accordion-context';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';
import useToggle from './useToggle';

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <AccordionHeader>{header}</AccordionHeader>
      <AccordionContent>{children}</AccordionContent>
    </AccordionProvider>
  );
};

export default Accordion;
