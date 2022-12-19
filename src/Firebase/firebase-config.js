
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDzQosGehZYY5CbBn97tfzlVtalxMLsSSE",
  authDomain: "learn-firebase-99fc5.firebaseapp.com",
  projectId: "learn-firebase-99fc5",
  storageBucket: "learn-firebase-99fc5.appspot.com",
  messagingSenderId: "309093659197",
  appId: "1:309093659197:web:358094c52c3aaff5dcb054",
  measurementId: "G-X2JC090TJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services 
export const db  = getFirestore(app)