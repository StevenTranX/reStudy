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
      {/* // ! V???n ????? x???y ra, n???u nh?? ta truy???n prop ref v??o sidebarMenu th?? ??? component Sidebar 
        // ! Ref ch??ng ta kh??ng th??? l???y ra t??? prop.ref ???????c m?? ph???i d??ng ForwardRef b???c l???i component con


        // ?? T???i sao khi b???m v??o button ( ???? forwardRef) v???n kh??ng hi???n Sidebar ??
        V?? trong hook useClick c?? vi???t l?? khi b???t s??? ki???n click c???a document
        v?? ch??ng ta g???i hook ??? BackUp.js, v?? n??t button l?? n??t d??ng c??i hook useClick
        n??n khi h??m s??? setShow = false => show = false th?? transform v???n n???m ??? ph??a trong -> kh??ng hi???n 
        
        // ?? V???y ph???i kh???c ph???c nh?? th??? n??o ? 
        Ki???m tra th??m 1 ??i???u ki???n n???a l?? !e.target.matches('button') - ngh??a l?? user kh??ng nh???n v??o button th?? m???i setShow = false
        => ??i???u n??y ?????ng ngh??a l?? n???u nh???n v??o button th?? setShow = true, true s??? hi???n sidebar ra 

        // ?? e.target.matches('button') ch??? gi???i h???n ??? button th??i, l??m sao ????? dynamic
        truy???n param dom v??o, r???i vi???t l???i e.target.matches(dom). Sau ???? khi g???i hook clickOutside th?? truy???n c??i component g???i sidebar ra 
         
        // ?? if ( nodeRef.current && !node.current.contains(e.target) &&
        !e.target.matches('button') // * n???u nh?? c?? t???n t???i component ref v??
       // * component n??y kh??ng c?? s??? ki???n click c???a user v?? s??? ki???n kh??ng ph???i l??
       // * n??t button
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
