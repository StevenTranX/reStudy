import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../../Hooks/useClickOutside';
// ! Đề bài : tạo 1 dropdown thuần ở reactjs ntn ?
// Cấu trúc dropdown có 2 phần, phần div trên và div dưới
const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutside();
  return (
    <div className='relative w-full max-w-[500px]' ref={nodeRef}>
      <div
        className='p-5 border-gray-200 rounded-lg w-full cursor-pointer'
        onClick={() => {
          setShow(!show);
        }}
      >
        Selected
      </div>
      {show && (
        <div className='border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white '>
          <div className='p-5 border-b-gray-100 cursor-pointer'>Javascript</div>
          <div className='p-5 border-b-gray-100 cursor-pointer'>ReactJS</div>
          <div className='p-5 cursor-pointer'>VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
