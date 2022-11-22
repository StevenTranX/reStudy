import React, { useEffect, useRef } from 'react';
// ?? Làm sao để DOM giống như javascript
// * Tạo divRef = useRef() , sau đó trong thẻ div ta truyền prop ref = {divRef}
// ? Vậy làm sao để thay đổi được thẻ div đó ?
// * Dùng useEffect để thay đổi
// ! component phải mount xong thì mới truy cập được ref
// ! Cho nên component mounting thì không gán được giá trị
const AutoFocusInput = () => {
  const inputRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    // if (divRef.current) {
    //   divRef.current.style.backgroundColor = 'blue';
    // }
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className='input-div' ref={divRef}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Auto focus input'
        className='inline-block p-5 border-gray-200 focus:border-blue-400'
      />
    </div>
  );
};

export default AutoFocusInput;
