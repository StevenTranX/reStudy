import React from 'react'
import FetchingData from './Components/Advanced-React/HOC-highOrderComponent/FetchingData'
// HOC = High Order Component Pattern
// ?? HOC dùng để làm gì 
// * Đôi khi ta phát triển nhiều cpn, nó sử dụng đi dụng lại 1 logic nào đó
// * Và ta muốn sử dụng cái logic đó cho nhiều component mà không cần viết đi viết lại nhiều lần thì ta dùng HOC.

// * Ví dụ, mỗi lần ta gọi API, ta thường hay sử dụng loading hoặc skeleton, khi data pending, trước đây ta viết loading ở tất cả các component
// * Nhưng khi có HOC, ta chỉ cần viết logic đó 1 lần
// HOC file bắt đầu với width
const App = () => {
  return (
    <div><FetchingData></FetchingData></div>
  )
}

export default App
