import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../../Hooks/useClickOutside';
import { createPortal } from 'react-dom';
// ! Đề bài : tạo 1 dropdown thuần ở reactjs ntn ?
// Cấu trúc dropdown có 2 phần, phần div trên và div dưới
const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutside();
  const [coords, setCoords] = useState({});
  const handleClick = () => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className='relative w-full max-w-[500px]' ref={nodeRef}>
      <div
        className='p-5 border-gray-200 rounded-lg w-full cursor-pointer'
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};
function DropdownList({ coords }) {
  if (typeof document === 'undefined') return null;
  return createPortal(
    <div
      className='border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white '
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        // Vì top khi ta nhấn sẽ bị dropdown đè lên nên + thêm chiều cao của selected thì sẽ không bị đè lên nữa
        width: coords.width,
      }}
    >
      <div className='p-5 border-b-gray-100 cursor-pointer'>Javascript</div>
      <div className='p-5 border-b-gray-100 cursor-pointer'>ReactJS</div>
      <div className='p-5 cursor-pointer'>VueJS</div>
    </div>,
    document.querySelector('body')
  );
}
export default DropdownPortal;
