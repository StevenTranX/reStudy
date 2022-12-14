import { set } from 'lodash';
import React, { useState } from 'react';
import { Dropdown } from './Components/Advanced-React/inversion-of-control';
const options = [
  {
    title: 'FrontEnd Dev',
  },
  {
    title: 'BackEnd Dev',
  },
  {
    title: 'FullStack Dev',
  },
];
// * Đây là phần viết composition nâng cao, so với việc viết nhiều HTML và khả năng chỉnh sửa sẽ rất mất công.
// * Đầu tiên ta có file index.js, nhờ vào file đó mà ta giảm được phần import rất gọn chỉ cần import file dropdown là xong. Muốn gọi các component con
// * ta chỉ cần dùng <Dropdown.ComponentCon/>

// * Tiếp theo điều đặc biệt ở đây là file context, thay vì truyền value như bình thường
// * ta truyền value = props, thì ta có thể truy xuất bất kỳ prop nào ở hook useContext ( dòng 36 -> 39)
// * ví dụ const { onClick } = useContext() điều này đồng nghĩa với việc gọi hàm handleSelectJob thay vì truyền prop nhiều tầng.

const App = () => {
  const [job, setJob] = useState();
  const [filter, setFilter] = useState('');
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };
  return (
    <div>
      {/* <Dropdown
        options={options}
        placeholder="Please Select Your Shits"
        inputPlaceHolder={"Search your Job...."}
        visibleIconCheck
      /> */}
      <Dropdown
        onClick={handleSelectJob}
        placeholder={`${job || 'Please Select Your Shits'}`}
        onChange={(e) => setFilter(e.target.value)}
        inputPlaceholder='Search your job'
      >
        <div className='options border border-gray-300 rounded'>
          <Dropdown.Search></Dropdown.Search>
          {options.map((option) => (
            <Dropdown.Option key={option.title}>
              <span>{option.title}</span>
              <Dropdown.IconCheck></Dropdown.IconCheck>
            </Dropdown.Option>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
