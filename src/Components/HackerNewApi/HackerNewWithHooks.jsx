import React, { useEffect, useReducer, useRef, useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react
import lodash from 'lodash';
import axios from 'axios';
const initialState = {
  hits: [],
  query: '',
  loading: true,
  error: '',
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};
const hackerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, hits: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_URL':
      return { ...state, url: action.payload };
    default:
      break;
  }
};
/* 
* Ôn tập cách sử dụng useReducer của react 
 - BOILER PLATE 
 Dùng reducer để dễ dàng quản lý khi chúng ta gọi quá nhiều useState trên 1 component 
 Giống redux 
 Đầu tiên ta import và gọi hook useReducer 
 const [ state , dispatch ] = useReducer (reducer, initialState)
 Sau đó chúng ta tạo 2 biến reducer và initialState
 const reducer = (state , action ) => { switch case .....}
 const initialState = { 1 object các biến mình sẽ sử dụng}
 - HOW TO USE 
 Dùng state ở đâu thì gọi state.hits, state.loading
 Muốn thay đổi state hoặc cập nhật state như setState thì dispatch 1 action
 dispatch({type : 'ALO_ALO', payload : something}) - payload là dữ liệu
 Sau khi có payload, vào hàm switch case của reducer xử lý mình sẽ dùng payload mới 
 đặt lại cho initialState
*/
const HackerNewWithHook = () => {
  const [state, dispatch] = useReducer(hackerReducer, initialState);
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState('react');
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState('');
  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 700);
  //   const [url, setUrl] = useState(
  //     `https://hn.algolia.com/api/v1/search?query=${query}`
  //   );
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const response = await axios.get(state.url);
    dispatch({
      type: 'SET_DATA',
      payload: response.data?.hits || [],
    });
    dispatch({
      type: 'SET_LOADING',
      payload: false,
    });
    try {
    } catch (error) {
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
      dispatch({
        type: 'SET_ERROR',
        payload: error,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className='bg-white  mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 '>
      <div className='flex'>
        <input
          type='text'
          onChange={(event) => {
            dispatch({ type: 'SET_QUERY', payload: event.target.value });
          }}
          defaultValue={state.query}
          className='border border-gray-200  block w-full rounded-md mb-5 focus:border-blue-400 transition-all'
        />
        <button
          onClick={(e) => {
            dispatch({
              type: 'SET_URL',
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
          disable={state.loading}
          style={{ opacity: state.loading ? '0.25' : '1' }}
          className='bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0'
        >
          Fetching
        </button>
      </div>
      {!state.loading && state.error && <p>Lỗi rồi cha ơi </p>}
      {state.loading && (
        <div className='loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-transparent border-r-4 animate-spin'></div>
      )}
      {!state.loading &&
        state.hits.length > 0 &&
        state.hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNewWithHook;
