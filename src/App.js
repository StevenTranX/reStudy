import React from 'react'
import Accordion from './Components/Advanced-React/composition/Accordion'
import Editable from './Components/Advanced-React/composition/Editable'
import FetchingData from './Components/Advanced-React/HOC-highOrderComponent/FetchingData'
import HandleValue from './Components/Advanced-React/render-props/HandleValue'
import Title from './Components/Advanced-React/render-props/Title'
// HOC = High Order Component Pattern
// ?? HOC dùng để làm gì 
// * Đôi khi ta phát triển nhiều cpn, nó sử dụng đi dụng lại 1 logic nào đó
// * Và ta muốn sử dụng cái logic đó cho nhiều component mà không cần viết đi viết lại nhiều lần thì ta dùng HOC.

// * Ví dụ, mỗi lần ta gọi API, ta thường hay sử dụng loading hoặc skeleton, khi data pending, trước đây ta viết loading ở tất cả các component
// * Nhưng khi có HOC, ta chỉ cần viết logic đó 1 lần
// HOC file bắt đầu với width

// React Composition dùng để chia nhỏ các component của chúng ta ra những cpn nhỏ để dễ dàng xử lý và maintain, và d
// nó còn hạn chế xử dung các đoạn code giống nhau và bị trùng ở nhiều cpn. 
// Code có thể tái sử dụng
const App = () => {
  return (
    <div>
      <Accordion></Accordion>
      <Editable></Editable>
    </div>
  )
}

export default App
