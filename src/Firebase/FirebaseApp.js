import { collection, getDocs, addDoc } from "firebase/firestore";
import postcss from "postcss";
import React, { useEffect } from "react";
import { db } from "./firebase-config";
const colRef = collection(db, "posts");
const FirebaseApp = () => {
  // colRef - collection ref

  useEffect(() => {
    // * 1. Get collection data (posts)

    getDocs(colRef)
      .then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title: "",
      author: "",
    })
      .then(() => console.log("success"))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-10">
      <div className="w-full mx-auto max-w-[500px] bg-white shadow-lg p-5">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium "
          ></button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
