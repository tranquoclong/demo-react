// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIjWa9mHVvVcMwViYDJrwVUkHVLhff_9M",
  authDomain: "fir-744da.firebaseapp.com",
  projectId: "fir-744da",
  storageBucket: "fir-744da.appspot.com",
  messagingSenderId: "353739360072",
  appId: "1:353739360072:web:0a88f3e2a25d475d40d57d",
  measurementId: "G-KL389SZKT9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
