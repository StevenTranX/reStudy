import React, { useEffect, useRef, useState } from 'react';

export default function useClickOutside(dom) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClickOut(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      )
        // Chỗ này vẫn còn hơi lùng bùng
        // ! Kiểm tra nodeRef.current có tồn tại hay không, nghĩa là đã dùng biến nodeRef DOM chưa
        // !dropdownRef.current.contains(e.target) chính là bắt sự kiện user có click Ở TRONG component đã DOM hay không
        // ! e.target.matches(dom) là
        setShow(false);
    }
    document.addEventListener('click', handleClickOut);
    return () => {
      document.removeEventListener('click', handleClickOut);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
