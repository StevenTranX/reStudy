import React, { useState } from 'react';
import Accordion from './Components/Advanced-React/composition/Accordion';
import Switch from './Components/ReactJs/switch/Switch';
// HOC = High Order Component Pattern
// ?? HOC dùng để làm gì
// * Đôi khi ta phát triển nhiều cpn, nó sử dụng đi dụng lại 1 logic nào đó
// * Và ta muốn sử dụng cái logic đó cho nhiều component mà không cần viết đi viết lại nhiều lần thì ta dùng HOC.

// * Ví dụ, mỗi lần ta gọi API, ta thường hay sử dụng loading hoặc skeleton, khi data pending, trước đây ta viết loading ở tất cả các component
// * Nhưng khi có HOC, ta chỉ cần viết logic đó 1 lần
// HOC file bắt đầu với width
function useToggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  const toggle = () => setOn(!on);
  function getToggleProps({ onClick, ...rest }) {
    return {
      onClick: () => {},
    };
  }
  // toggler props tổng hợp những prop của toggle bỏ vào 1 chỗ
  return {
    on,
    toggle,
    getToggleProps,
  };
}
// Props Collection - Kentc Dodds - creator of Remix
const App = () => {
  const { on, toggleProps, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })}></Switch>
      <hr />
      <button
        {...getToggleProps({
          onClick: () => {
            return console.info('onButtonClicked');
          },
        })}
        aria-label='custom-button'
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  );
};

export default App;
