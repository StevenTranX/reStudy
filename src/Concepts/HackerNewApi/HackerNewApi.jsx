import React, { useRef, useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react
import lodash from 'lodash';
import axios from 'axios';
const HackerNewApi = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 700);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setError('Network Error');
      setLoading(false);
    }
  };
  // ?? Khi điền vào form input và kết hợp với useEffect thì component render data nhiều lần mỗi khi ta đổi
  // ?? value trong form, vậy làm sao để việc call API không gọi liên tục mỗi lần onChange
  // * Dùng thư viện lodash, const handleUpdate = lodash.debounce ( callbackFn , time)
  // * sau đó bỏ vào onChange hàm handleUpdate - DONE

  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  // ?? Vì sao khi làm fetch data động bằng state query thì dependency lại hiện lỗi xanh ???
  // * Vì function handleFetchData đang phụ thuộc vào cái state bên ngoài, khi phụ thuộc bên ngoài thì có sự thay đổi
  // ! Để khắc phục thì ta có thể sử dụng useRef
  // const handleFetch = useRef({})
  // async handleFetch () => {...}

  /* 
  ! lỗi component unmounted khi chuyển qua component khác 
  * Tình huống : khi ta setTimeout khi gọi API, gọi API 3s sau mới fetchData. 
  *              nhưng khi đang trong thời gian đó, ta chuyển qua 1 trang khác thì console sẽ báo lỗi unmounted 
  ?? Fix như thế nào 
  * tạo 1 biến isMounted = useRef(true) mặc định để isMounted là true, nghĩa là componen mount rồi 
  * tạo 1 useEffect mới và cleanup isMounted, đổi isMounted.current = false 
  * check điều kiện trong hàm fetch Data, nếu như isMounted = true thì mới chạy fetchData, nếu ko thì ko chạy. 
  * Vì hàm sẽ bị cleanup nếu false nên điều kiện fetchData ko tìm thấy isMounted sẽ không chạy hàm => ko ra looix.
  */
  return (
    <div className='bg-white  mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 '>
      <div className='flex'>
        <input
          type='text'
          onChange={handleUpdateQuery}
          defaultValue={query}
          className='border border-gray-200  block w-full rounded-md mb-5 focus:border-blue-400 transition-all'
        />
        <button
          onClick={(e) => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
          className='bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0'
        >
          Fetching
        </button>
      </div>
      {!loading && error && <p>Lỗi rồi cha ơi </p>}
      {loading && (
        <div className='loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-transparent border-r-4 animate-spin'></div>
      )}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNewApi;
