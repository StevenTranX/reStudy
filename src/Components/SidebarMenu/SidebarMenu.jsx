import React from 'react';

const SidebarMenu = React.forwardRef(({ show }, ref) => {
  return (
    <div>
      <div
        className={`w-[300px] bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 transition-all ${
          show ? '' : '-translate-x-full'
        } `}
        ref={ref}
      >
        SidebarMenu
      </div>
    </div>
  );
});

export default SidebarMenu;
