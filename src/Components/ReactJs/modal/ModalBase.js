import React from 'react';
import Portal from '../portal/Portal';
import { CSSTransition } from 'react-transition-group';
// npm i react-transition-group
const ModalBase = ({ visible, onClose, children, containerClassName }) => {
  // ModalBase là component chỉ có overlay và 1 lớp chữ phía trên
  return (
    <>
      <CSSTransition in={visible} unmountOnExit timeout={250} classNames='zoom'>
        {(status) => (
          <Portal
            visible={status !== 'exited'}
            onClose={onClose}
            containerClassName='flex items-center justify-center transition-all'
            bodyStyle={{ transition: 'all 250ms' }}
          >
            {children}
            {/* Trong này gọi portal vì mình muốn modal base nằm cùng cấp với div root */}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
