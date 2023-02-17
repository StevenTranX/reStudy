import { createContext, useContext } from 'react';
import useToggle from './useToggle';

const AccordionContext = createContext();
function AccordionProvider(props) {
  const { value: show, handleToggle } = useToggle();
  const values = { show, handleToggle };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
}
function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === 'undefined')
    throw new Error('useAccordion must be used with AccordionProvider');
  return context;
}
export { useAccordion, AccordionProvider };
