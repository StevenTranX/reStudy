import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useClickOutside from '../../Hooks/useClickOutside';
import useHover from '../customHook/userHover';
// Đây là challenge làm 1 tooltip bằng react thuần
// Yêu cầu
//  Tạo component sẽ pop up lên hướng dẫn.
/* 
Điều gì sẽ xảy ra khi click hoặc hover vào 
- Pop up hiện lên, vị trí phải nằm ở giữa đoạn text đó, và cùng cấp với root
- Sau đó dùng hook useClickOutside để tắt 
*/

const ToolTip = () => {
  const [coordinates, setCoordinates] = useState({});
  //   const { show, setShow, nodeRef } = useClickOutside();

  // Trong bài giải thì thay vì chỗ này dùng useClickOutside thì dùng useHover
  const { hovered, nodeRef } = useHover();
  const handleHover = () => {
    setCoordinates(nodeRef.current.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && (
        <Message coordinates={coordinates}>This is the tooltip</Message>
      )}
      <span
        ref={nodeRef}
        onMouseOver={handleHover}
        className='font-semibold text-black '
      >
        Hover me
      </span>
    </div>
  );
};

function Message({ coordinates, children }) {
  return createPortal(
    <p
      className='absolute inline-block p-4 -translate-y-full -translate-x-2/4 bg-black text-white text-center rounded-lg'
      style={{
        top: coordinates.top - coordinates.height / 2 + window.scrollY,
        left: coordinates.left + coordinates.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector('body')
  );
}
export default ToolTip;
