// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALzB6K-iYDqTw-D2Yo7ya_x6Ojbn0gMdM",
  authDomain: "dragon-news-auth-445a5.firebaseapp.com",
  projectId: "dragon-news-auth-445a5",
  storageBucket: "dragon-news-auth-445a5.appspot.com",
  messagingSenderId: "581943765075",
  appId: "1:581943765075:web:3ee15426016e035c28bea6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
