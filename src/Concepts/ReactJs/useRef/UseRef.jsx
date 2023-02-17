import React, { useState } from 'react';
/* 
?? useRef là gì và tại sao phải sử dụng Ref 
! useRef dùng để access DOM đã có sẵn trên website 
giống như ở js ta dùng document.getElementById thì ở react
chúng ta dùng Ref 

?? Sử dụng ref cơ bản ntn 
*/
const UseRef = () => {
  //   const inputRef = React.useRef(initialValue);
  const countRef = React.useRef(0);
  // * truy xuất giá trị của ref - dùng current
  console.log(countRef.current);
  // * update giá trị ref
  countRef.current = 10;
  // ! Ref khác State ở chỗ, state thay đổi thì component rerender
  // ! Tuy nhiên ref update thì component ko rerender
  const [count, setCount] = useState(0);
  const handle = () => {
    const updateCount = countRef.current + 1;
    countRef.current++;
  };
  return (
    <div>
      <button onClick={handle}>Click me </button>
    </div>
  );
};

export default UseRef;
