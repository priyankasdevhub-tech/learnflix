// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKhkyaQDcyipO0mRbjGWS0LZ9tahkAG4",
  authDomain: "learnflix-a4a2f.firebaseapp.com",
  projectId: "learnflix-a4a2f",
  storageBucket: "learnflix-a4a2f.firebasestorage.app",
  messagingSenderId: "418206474234",
  appId: "1:418206474234:web:b233975187aaca70658e43",
  measurementId: "G-9135X9GFHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);