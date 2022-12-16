import { collection, getDocs } from 'firebase/firestore';
import postcss from 'postcss';
import React, { useEffect } from 'react';
import { db } from './firebase-config';

const FirebaseApp = () => {
  // colRef - collection ref

  useEffect(() => {
    // * 1. Get collection data (posts)
    const colRef = collection(db, 'posts');
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

  return <div>FirebaseApp</div>;
};

export default FirebaseApp;
