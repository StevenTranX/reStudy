import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
const listLink = [
  {
    id: 1,
    to: '/',
    title: 'Home',
  },
  {
    id: 2,
    to: '/blog',
    title: 'Blog',
  },
  {
    id: 3,
    to: '/profile',
    title: 'Profile',
  },
];
const Nav = () => {
  // Chúng ta có thể thấy className ta đã phải copy paste 3 lần, vậy làm sao để optimize
  return (
    <>
      <div className='p-5 bg-white shadow-md flex items-center justify-center gap-x-5'>
        {listLink.map((item) => {
          return (
            <NavLink
              key={item.id}
              className={({ isActive }) => (isActive ? 'text-green-400' : '')}
              to={item.to}
            >
              {/* Ta phải destructuring isActive vì isActive nằm trong 1 object */}
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
