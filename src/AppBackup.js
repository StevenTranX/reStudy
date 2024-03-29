/* eslint-disable react/jsx-no-comment-textnodes */
import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Components/Home/Home';
import Tailwind from './Components/ReactJs/Tailwind/Tailwind';
import NotFound from './Components/NotFound/NotFound';
import cn from 'classnames';
import TicTacToeMain from './Components/ReactJs/TicTacToe/TicTacToeMain';
import Card from './Components/ReactJs/StyledComponents/Card';
import { capitalizeString } from './Components/Javascript/JsTheory/string';
import Photo from './Components/ReactJs/useEffect/Photo';
import HackerNewApi from './Components/HackerNewApi/HackerNewApi';
import HackerNewReducer from './Components/HackerNewApi/HackerNewReducer';
import StopWatch from './Components/ReactJs/useRef/StopWatch';
import AutoFocusInput from './Components/ReactJs/useRef/AutoFocusInput';
import TextAreaAutoResize from './Components/ReactJs/useRef/TextAreaAutoResize';
import Dropdown from './Components/ReactJs/useRef/Dropdown';
import Blog from './Components/ReactJs/customHook/Blog';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import { Fragment, useState } from 'react';
import useClickOutside from './Components/Hooks/useClickOutside';
import Form from './Components/ReactJs/Form/Form';
import MovieSearchApp from './Components/ReactJs/MovieSearchApp/MovieSearchApp';
import FormikSignupForm from './Components/ReactJs/Form/FormikSignupForm';
import FormikSignupFormV2 from './Components/ReactJs/Form/FormikSignupFormV2';
import FormikSignupFormMain from './Components/ReactJs/Form/FormikSignUpFormMain';
import HookForm from './Components/ReactJs/Form/HookForm';
import Modal from './Components/ReactJs/modal/Modal';
import DropdownPortal from './Components/ReactJs/useRef/DropdownPortal';
import ToolTip from './Components/ReactJs/ToolTip/ToolTip';
import { ErrorBoundary } from 'react-error-boundary';
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
function AppBackUp() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <nav className="flex justify-center">
        <NavLink
          to="/"
          className={({ isActive }) => cn('nav-link', { red: isActive })}
        >
          Home
        </NavLink>
        <NavLink
          to="/tailwind"
          className="text-blue-600 visited:text-purple-600"
        >
          Tailwind
        </NavLink>
        <NavLink to="*" className="text-blue-600 visited:text-purple-600">
          Not Found
        </NavLink>
      </nav>
      <div className="bg-sky-500 h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div> */}
      {/* <TicTacToeMain /> */}
      {/* <Card />
      <Tailwind />
      <Photo /> */}
      {/* <HackerNewReducer /> */}
      {/* <StopWatch /> */}
      {/* <AutoFocusInput /> */}
      {/* <TextAreaAutoResize />
      <Dropdown />
      <Blog /> */}
      {/* <button
        onClick={() => {
          setShow(true);
        }}
        className='inline-block m-3 p-3 rounded-lg text-white bg-green-400 '
      >
        Show Menu
        <SidebarMenu show={show} ref={nodeRef} /> */}
      {/* // ! Vấn đề xảy ra, nếu như ta truyền prop ref vào sidebarMenu thì ở component Sidebar 
        // ! Ref chúng ta không thể lấy ra từ prop.ref được mà phải dùng ForwardRef bọc lại component con


        // ?? Tại sao khi bấm vào button ( đã forwardRef) vẫn không hiện Sidebar ??
        Vì trong hook useClick có viết là khi bắt sự kiện click của document
        và chúng ta gọi hook ở BackUp.js, và nút button là nút dùng cái hook useClick
        nên khi hàm sẽ setShow = false => show = false thì transform vẫn nằm ở phía trong -> không hiện 
        
        // ?? Vậy phải khắc phục như thế nào ? 
        Kiểm tra thêm 1 điều kiện nữa là !e.target.matches('button') - nghĩa là user không nhấn vào button thì mới setShow = false
        => Điều này đồng nghĩa là nếu nhấn vào button thì setShow = true, true sẽ hiện sidebar ra 

        // ?? e.target.matches('button') chỉ giới hạn ở button thôi, làm sao để dynamic
        truyền param dom vào, rồi viết lại e.target.matches(dom). Sau đó khi gọi hook clickOutside thì truyền cái component gọi sidebar ra 
         
        // ?? if ( nodeRef.current && !node.current.contains(e.target) &&
        !e.target.matches('button') // * nếu như có tồn tại component ref và
       // * component này không có sự kiện click của user và sự kiện không phải là
       // * nút button
      */}
      {/* </button> */}
      {/* <Form /> */}
      {/* <MovieSearchApp /> */}
      {/* <FormikSignupForm /> */}
      {/* <FormikSignupFormV2 /> */}
      {/* <FormikSignupFormMain /> * /}
      {/* <HookForm /> */}
      {/* <Fragment>
        <div>
          {' '}
          <Modal
            open={showModal}
            handleClose={() => {
              setShowModal(false);
            }}
          />
        </div>
        <button
          className='bg-blue-500 p-4 text-white rounded-md'
          onClick={() => {
            setShowModal(true);
          }}
        >
          Show Modal
        </button>
        <div className='relative z-30'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          doloribus at alias. Excepturi itaque neque voluptatibus eligendi, nemo
          optio reiciendis enim eaque labore minima ratione iure quasi sequi
          quis laudantium laborum dolorum ea! Iste aspernatur eum hic modi odio
          assumenda.
        </div>
        <DropdownPortal />
      </Fragment> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ToolTip />
      </ErrorBoundary>
    </>
  );
}

export default AppBackUp;
