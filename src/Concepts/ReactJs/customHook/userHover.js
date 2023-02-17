import { useState, useEffect, useRef } from 'react';

export default function useHover() {
  // ! Viết 1 custom hook để khi hover vào thì thẻ biến đổi trạng thái
  /* 
    * Phân tích nghiệp vụ 
    ?? Khi hover vào thì sẽ có trang thái
    * mouseover 
    * mouseout
    
    */
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null); // nodeRef là cái DOM
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener('mouseover', handleMouseOver);
      // dom ở đây là cái component sẽ được đưa vào khi gọi cái useHover
      // Sau đó component này sẽ lắng nghe sự kiến mouseover, gọi hàm handlemouseover và set Hovered true
      dom.addEventListener('mouseout', handleMouseOut);
    }
    return () => {
      dom.removeEventListener('mouseover', handleMouseOver);
      dom.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
  // Vì sao phải trả ra hovered và nodeRef ?
  // ! hovered để khi dùng hook biết được trạng thái true false của hovered và ở component dùng ta dùng conditional rendering
  // ! Trả ra nodeRef để bỏ component cần sử dụng vào để thực hiện DOM
}
