import React from 'react';
import { createPortal } from 'react-dom';
// !Trong môi trường làm việc development, nên dùng proptype
//! Chúng ta ko hề biết prop truyền vào component là type gì, có bắt buộc hay không ??
import PropTypes from 'prop-types';
const Modal = ({ open = false, handleClose = () => {} }) => {
  // default parameter dùng dấu =
  if (typeof document === 'undefined') return <div className='modal'></div>;
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        open ? '' : 'opacity-0 invisible'
      }`}
    >
      <div
        className='absolute inset-0 bg-black bg-opacity-25 overlay'
        onClick={handleClose}
      ></div>
      <div className='modal-content bg-white relative z-10 p-10 rounded-lg max-w-[342px]'>
        <span
          onClick={handleClose}
          className='absolute bg-white top-0 right-0 cursorpointer rounded-full flex items-center justify-center p-1 w-10 h-10 -translate-y-2/4 translate-x-2/4 cursor-pointer'
        >
          X
        </span>
        <h2 className='text-4xl text-center text-black font-semibold'>
          Welcome back!
        </h2>
        <div className='flex flex-col gap-3 mb-5'>
          <label className='text-sm cursor-pointer' htmlFor='email'>
            Email Address
          </label>
          <input
            type='text'
            className='w-full leading-normal text=sm bg-[#E7ECF3] p-4 rounded-lg'
            placeholder='Enter your email'
          />
        </div>
        <div className='flex flex-col gap-3 mb-5'>
          <label className='text-sm cursor-pointer' htmlFor='password'>
            Password Address
          </label>
          <input
            type='text'
            className='w-full leading-normal text=sm bg-[#E7ECF3] p-4 rounded-lg'
            placeholder='Enter your email'
          />
        </div>
        <button className='w-full p-4 text-base font-semibold bg-blue-500 rounded-lg text-white'>
          Sign In
        </button>
      </div>
    </div>,
    document.querySelector('body')
  );
};
// * Nên khai báo propTypes như thế này
// ? Vậy lợi ích là gì
// * Phát triển component này tốt hơn, dev khác dễ đọc code của chúng ta hơn
// * Na ná với validation của yup
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
