import React, { useState } from 'react';
import statisticStr from './Components/Javascript/AlgorithmExercises/checkStatisticStr';
import CountContext from './Components/ReactJs/Context/CountContext';
import Modal from './Components/ReactJs/modal/Modal';
import ModalAdvanced from './Components/ReactJs/modal/ModalAdvanced';
import ModalBase from './Components/ReactJs/modal/ModalBase';
import ModalBasePractice from './Components/ReactJs/modal/ModalBasePractice';
import Portal from './Components/ReactJs/portal/Portal';
import PortalPractice from './Components/ReactJs/portal/PortalPractice';

/* 
* 30/11/22 Hôm nay tôi học được gì ? 
Cách sử dụng createPortal cho component như hiện modal, dropdown 
* Việc này để tránh việc khi làm việc với component chính dùng overflow-hidden, thì component dropdown con sẽ bị đè 
* nên ta dịch chuyển những modal hoặc dropdown ra ngoài cùng với div root 
* Dùng tọa độ để hiện component modal bằng hàm getBoundingClientRect()
* rồi dùng tọa độ này để gán vào vị trí top left của absolute
* cài đặt react propTypes để khai báo bắt buộc prop và type của Props
* Add ErrorBoundary để tối ưu trải nghiệm người dùng ( lỗi nhưng vẫn hiện ra component )

* 3/12/2022 Nhiệm vụ ngày : 
1 .Tạo ra 1 component Portal để bọc lại các Modal để các modal nằm cùng cấp với div root 
2. Tạo ra 1 ModalBase để từ ModalBase làm 1 cái Modal thật dễ dàng hơn 
3. Tạo ra 1 modal đăng nhập gồm có email và password, có thể tắt mở, có hiệu ứng zoom. 
!! Let's go. 
*/
const App = () => {
  // const [openModalBase, setOpenModalBase] = useState(false);
  // return (
  //   <div>
  //     <button
  //       className='bg-blue-700 rounded-lg p-5 text-white font-semibold '
  //       onClick={() => setOpenModalBase(true)}
  //     >
  //       Show Modal Base Practice
  //     </button>
  //     <div>
  //       <ModalBasePractice
  //         onClose={() => {
  //           setOpenModalBase(false);
  //         }}
  //         visible={openModalBase}
  //       >
  //         <div className='p-10 bg-white rounded-lg  '>
  //           This is the content of Modal Base Practice
  //         </div>
  //       </ModalBasePractice>
  //     </div>
  //   </div>
    // <div>
    //   {/* <Modal
    //     open={true}
    //     handleClose={() => {
    //       console.log('handleClose');
    //     }}
    //   /> */}
    //   {/* <Portal visible = {false} /> */}
    //   <button
    //     className='p-5 rounded-lg text-white text-center bg-blue-400'
    //     onClick={() => {
    //       setOpenModalBase(true);
    //     }}
    //   >
    //     Show Modal Base
    //   </button>
    //   <button
    //     className='p-5 rounded-lg text-white text-center bg-blue-400'
    //     onClick={() => {
    //       setOpenModal(true);
    //     }}
    //   >
    //     Show Modal Advanced
    //   </button>
    //   <ModalBase
    //     visible={openModalBase}
    //     onClose={() => setOpenModalBase(false)}
    //   >
    //     <div className='bg-white p-10 rounded-lg w-full max-w-[320px] transition-all'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
    //       repudiandae cumque quaerat quos ea placeat eum, voluptatem error,
    //       aliquid inventore doloribus omnis exercitationem culpa quidem ex ipsum
    //       iste, minima nemo quibusdam deserunt. Possimus placeat sit quo. Minus
    //       ad vitae praesentium veniam nulla sunt sint esse inventore? Suscipit
    //       quibusdam fuga quasi.
    //     </div>
    //   </ModalBase>
    //   <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
    //     <div className='modal-content bg-white relative z-10 p-10 rounded-lg max-w-[342px]'>
    //       <span className='absolute bg-white top-0 right-0 cursorpointer rounded-full flex items-center justify-center p-1 w-10 h-10 -translate-y-2/4 translate-x-2/4 cursor-pointer'>
    //         X
    //       </span>
    //       <h2 className='text-4xl text-center text-black font-semibold'>
    //         Welcome back!
    //       </h2>
    //       <div className='flex flex-col gap-3 mb-5'>
    //         <label className='text-sm cursor-pointer' htmlFor='email'>
    //           Email Address
    //         </label>
    //         <input
    //           type='text'
    //           className='w-full leading-normal text=sm bg-[#E7ECF3] p-4 rounded-lg'
    //           placeholder='Enter your email'
    //         />
    //       </div>
    //       <div className='flex flex-col gap-3 mb-5'>
    //         <label className='text-sm cursor-pointer' htmlFor='password'>
    //           Password Address
    //         </label>
    //         <input
    //           type='text'
    //           className='w-full leading-normal text=sm bg-[#E7ECF3] p-4 rounded-lg'
    //           placeholder='Enter your email'
    //         />
    //       </div>
    //       <button className='w-full p-4 text-base font-semibold bg-blue-500 rounded-lg text-white'>
    //         Sign In
    //       </button>
    //     </div>
    //   </ModalAdvanced>
    // </div>
  
};

export default App;
