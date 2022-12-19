import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc , deleteDoc, doc } from "firebase/firestore";
// doc ở đây là 1 document cụ thể doc( firestore , path , id  )
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postId, setPostId] = useState()
  // colRef - collection ref
  useEffect(() => {
    // 1. Get collection from data (posts) bằng cách dùng hàm getDocs
    getDocs(colRef)
      .then((snapshot) => {
        // 2 Sau đó .then và lấy item snapshow ra
        console.log(snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          // Duyệt snapshot.docs - chữ mờ rồi dùng hàm data() để lấy các trường mình generate ở store ra

          // ?? Khi ta console.log(snapshot) thì ta không hề thấy data ở đâu cả những sau khi dùng data() thì ta truy xuất được ??
          // * đây là cách hoạt động của firebase - data nằm ở snapshot.document.data.value.mapValue.fields
          // * ta chỉ cần dùng hàm data() là lấy được

          posts.push({
            id: doc.id,
            ...doc.data(),
          });
          // Sau đó push data vào mảng rỗng, lấy riêng id và clone data
        });
        console.log(posts);
      })
      .catch((error) => {
        console.log(error);
        // nhớ catch để bắt lỗi.
      });
  }, []);
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      // addDoc là 1 promise
      title,
      author
      // * Ở đây thay vì viết title : title từ useState thì ta viết như trên trong es6 
    })
      .then(() => {
        console.log("success");
        // reset form
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, 'posts', postId)
    await deleteDoc(colRefDelete)
    console.log("Delete Success");
  }
  return (
    <div className='p-10'>
      <div className='w-full mx-auto max-w-[500px] bg-white shadow-lg p-5 mb-10'>
        <form onSubmit={handleAddPost}>
          <input
            type='text'
            className='p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-blue-500'
            placeholder='Enter your title'
            name='title'
            onChange={e => {setTitle(e.target.value)}}
          />
          <input
            type='text'
            className='p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-blue-500'
            placeholder='Enter your author'
            name='author'
            onChange={e => {setAuthor(e.target.value)}}
          />
          <button
            type='submit'
            className='p-3 bg-blue-500 text-white text-sm font-medium '
          >
            Submit
          </button>
        </form>
      </div>
      <div className='w-full mx-auto max-w-[500px] bg-white shadow-lg p-5 mb-10'>
        <form onSubmit={handleRemovePost}>
          <input
            type='text'
            className='p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-blue-500'
            placeholder='Enter your id'
            name='postId'
            onChange={e => {setPostId(e.target.value)}}
          />
          <button
            type='submit'
            className='p-3 bg-red-500 text-white text-sm font-medium '
          >
            Remove Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
