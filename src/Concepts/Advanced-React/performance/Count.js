import React, { useRef, useState } from 'react';
// * Component sẽ bị re-render khi state thay đổi ( count )
// * Component sẽ bị re-render khi prop truyền vào thay đổi.

const Count = React.memo(() => {
  const [count, setCount] = useState(0);

  const renderRef = useRef(0);
  return (
    <div>
      <div>Count : {count}</div>
      <div>Renders : {renderRef.current++}</div>
      <button
        className='p-3 rounded bg-blue-400 text-white'
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
});

export default Count;
