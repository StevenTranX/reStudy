import React, { useEffect, useState } from 'react';
import axios from 'axios';
/*
! ôn tập useEffect 
useEffect( callback , [dependencies])
 * side-effects 
*/
// ! 3 vòng đời của Component Mounted - Updated - Unmounted
// * Khi khởi tạo, react sẽ chạy hàm callback của useEffect trước
// * Nếu dependencies thay đổi, thì component sẽ re-render và commit changes tới dom ( chạy lại hàm call back

// ! khi không truyền dependencies là 1 array rỗng thì mỗi lần component đều re-render mỗi khi thực thi 1 hành động nào đó
// !
const fetchPhotos = (page) => {
  try {
    return axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
};
const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = async () => {
    await fetchPhotos(nextPage).then((images) => {
      const newPhotos = [...photos, ...images];
      setPhotos(newPhotos);
      setNextPage(nextPage + 1);
    });
  };
  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div className='grid grid-cols-4 gap-5 p-5'>
      {photos.map((photo, index) => {
        return (
          <div
            key={photo.id}
            className='p-3 bg-white shadow-md rounded-lg h-[200px]'
          >
            <img
              src={photo.download_url}
              alt={photo.author}
              className='w-full h-full object-over rounded-lg'
            />
          </div>
        );
      })}
      <div className='text-center'>
        <button
          className='inline-block px-8 py-4 bg-purple-400 text-white '
          onClick={handleLoadMorePhotos}
        >
          {' '}
          Load more{' '}
        </button>
      </div>
    </div>
  );
};

export default Photo;
