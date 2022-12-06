import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import BlogPage from './BlogPage';
import ProfilePage from './ProfilePage';
import BlogPageDetail from './BlogPageDetail';
// ?? Vậy khi user nhập bậy vào 1 trang not found trên url, thì làm sao để hiển thị notfound
// -> Làm 1 Route nằm ở ngoài và path = '*' element là component not found
// ??  Outlet là gì, và vì sao cần sử dụng outlet.
// -> Sử dụng Outlet khi muốn chuyển trang nhưng trên thanh nav bar, header hoặc footer vẫn giữ nguyên.
// ?? Vậy sử dụng outlet như thế nào ??
// -> Vào component cha import {Outlet} từ 'react-router-dom'
// -> Dựa vào nested Route, ta sẽ chèn Outlet vào component của Route cha, thì những nơi đặt Outlet chính là nơi mà Route con được render ra

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav></Nav>}>
          <Route path='/' element={<>HomePage</>}></Route>
          <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
          <Route
            path='/blog/:slug'
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path='*' element={<>This is 404 Page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
