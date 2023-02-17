// ! Tạo ra 1 Portal Wrapper

import { wrap } from 'lodash';
import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// Vậy muốn tạo ra 1 Portal phải làm gì ???
function createPortalWrapper() {
  const element = document.createElement('div');
  element.id = 'portal-wrapper';

  // khởi tạo thẻ div là element và đặt id cho nó
  return element;
  //*  và khi gọi hàm này thì hàm sẽ trả ra thẻ div đó
}
const wrapperElement = createPortalWrapper();

const PortalPractice = ({
  containerClassName = '',
  containerStyle = {},
  bodyClassName = '',
  bodyStyle = {},
  visible = false,
  children,
  onClose = () => {},
}) => {
  useEffect(() => {
    document.body.appendChild(wrapperElement);
  }, []);

  const content = (
    <div
      className={`fixed inset-0 z-[9999]  ${containerClassName} `}
      style={containerStyle}
    >
      <div
        className={'overlay bg-black opacity-20 absolute inset-0'}
        onClick={onClose}
      ></div>
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(content, wrapperElement);
};
PortalPractice.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func,
};
export default PortalPractice;
