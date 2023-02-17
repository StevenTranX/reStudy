import { create } from 'lodash';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// ?? Vấn đề đặt ra
// * Bình thường khi ta làm 1 cái modal, muốn cho modal đó không đụng chạm với
// * những cái div khác thì ta cho nó nằm cùng cấp với div root
// ?? Vậy bây giờ ta viết 1 cái Portal Wrapper và bọc lại những cái modal đó ntn ??
function createPortalWrapper() {
  // hàm này dùng để tạo thẻ div cùng cấp với div root
  const element = document.createElement('div');
  element.id = 'portal-wrapper';
  return element;
}
const portalWrapperElement = createPortalWrapper();
// * Lưu hàm createPortal vào 1 biến
// * Khi lưu như vậy thì document sẽ tạo ra 1 cái div có id là portal wrapper

const Portal = ({
  containerClassName = '',
  bodyClassName = '',
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  visible = false,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElement);
  }, []);
  // Khi component khởi tạo, thì lập tức add div portal vào body
  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${containerClassName} `}
      style={containerStyle}
      onClick={onClose}
    >
      <div className='overlay absolute inset-0 bg-black bg-opacity-20'></div>
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(renderContent, portalWrapperElement);
  // bình thường hàm createPortal mình đã học là đây, tham số đầu tiên là phần div cùng cấp div root, phần 2 là DOM body
};
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.string,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node, // những element truyền vào trong
};

export default Portal;
