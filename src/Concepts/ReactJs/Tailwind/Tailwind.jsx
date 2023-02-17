import React from 'react';

const Tailwind = () => {
  return (
    <div>
      <button className='text-20 font-bold px-6 py-[6px] bg-purple-500 rounded-[7px] hover:bg-pink-500 transition-all duration-200 bg-primary-gradient'>
        Start
      </button>
    </div>
  );
};

export default Tailwind;
// * CLASSNAME THÔNG DỤNG Ở TAILWIND
/* className =  " 
relative
 w-full 
 rounded-lg 
 h-[400px] muốn enable tính năng này phải vào tailwind config thêm mode : "jit"
 flex 
 items-center
 text-transparent
 bg-clip-text
 "

*/
