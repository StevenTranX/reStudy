import React from 'react';
import PropTypes from 'prop-types';
/*
! Đây là 1 hook ở react 
! Dùng để xử lý vấn đề liên quan đến side effect 
! Side effect là những vấn đề xảy ra ở bên trong function 
! nhưng ảnh hưởng tới bên ngoài
 */
function demo() {
  // Thường function sẽ trả về 1 giá trị
  // Nhưng sẽ có các function không trả về chỉ xử lý
  // để anh hưởng bên ngoài gọi là side effect
  document.title = 'Demo';
  // Những cái bên trong function tác động bên ngoài như :
  // setTimeout, setInterval, countdown
  // DOM - scroll thì header fixed, scroll component chạy ra
  // API - fetch data chạy ra giao diện
}
const useEffect = (props) => {
  return <div>useEffect</div>;
};

useEffect.propTypes = {};

export default useEffect;
