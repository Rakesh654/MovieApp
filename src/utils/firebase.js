// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSyVpya13RlfKLc0oy-L4CxexomAi3CwA",
  authDomain: "movieapp-39be3.firebaseapp.com",
  projectId: "movieapp-39be3",
  storageBucket: "movieapp-39be3.appspot.com",
  messagingSenderId: "576899322351",
  appId: "1:576899322351:web:cba9d9e3ee038c3077261a",
  measurementId: "G-SWX2SZ1T65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();