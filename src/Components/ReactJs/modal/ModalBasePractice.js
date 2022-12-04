import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PortalPractice from '../portal/PortalPractice';
const ModalBasePractice = ({ children, visible, onClose }) => {
  // in là dạng true false, giống như open

  return (
    <>
      <CSSTransition in={visible} unmountOnExit timeout={250} classNames='zoom'>
        {(status) => (
          <PortalPractice
            containerClassName={'flex items-center justify-center'}
            onClose={onClose}
            visible={status !== 'exited'}
          >
            {children}
          </PortalPractice>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBasePractice;
