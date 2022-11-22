import React, { useEffect, useRef, useState } from 'react';
// ! Đề bài, text area khi user điền thông tin vào - dài quá sẽ xuất hiện scroll dọc
// ! làm sao để textarea tự resize chiều cao ????
const TextAreaAutoResize = () => {
  const [text, setText] = useState('Demo');
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  const handleChange = (event) => {
    setText(event.target.value);
    setTextareaHeight('auto');
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className='p-5' style={{ minHeight: parentHeight }}>
      <textarea
        className='w-full max-w-[400px] rounded-lg border border-gray-400 resize-none transition-all overflow-hidden'
        placeholder='Please enter your shitty content'
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
