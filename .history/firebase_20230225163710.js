// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUcOqjrAu_fv0YuSfN522NcDgozPclabs",
  authDomain: "tinder-9c1e7.firebaseapp.com",
  projectId: "tinder-9c1e7",
  storageBucket: "tinder-9c1e7.appspot.com",
  messagingSenderId: "90672780299",
  appId: "1:90672780299:web:e2fdfd718e1bd3856ce30e",
  measurementId: "G-HB25Q8Y7F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = GoogleAuthProvider();
const db =getFirestore()