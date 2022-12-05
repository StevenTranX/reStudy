import React, { useState } from 'react';
import { createContext } from 'react';
const CountContextEl = createContext();
function CountProvider(props, ch) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContextEl.Provider value={value} {...props}>
      {' '}
    </CountContextEl.Provider>
  );
}
function Counter() {
  const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onCLick={increment}
      className='p-5 rounded-lg text-white font-semibold bg-purple-500'
    >
      INCREASE COUNT
    </button>
  );
}
function CountDisplay() {
  const count = 0;
  return <div> The count is : {count}</div>;
}
const CountContext = () => {
  return (
    <div>
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};

export default CountContext;
