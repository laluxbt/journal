// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHefH0dCSj2xMYRkSr6_QgS-r0DwgBZ2s",
  authDomain: "journal-with-qwen.firebaseapp.com",
  projectId: "journal-with-qwen",
  storageBucket: "journal-with-qwen.firebasestorage.app",
  messagingSenderId: "1093222825874",
  appId: "1:1093222825874:web:817acd2986649a19990b4b",
  measurementId: "G-4HQ7DFE86Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);