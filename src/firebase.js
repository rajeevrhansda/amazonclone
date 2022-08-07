// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDggB21OdgNNdyFY0enAPrdSzwBQ8rMEx0",
  authDomain: "clone-9e90e.firebaseapp.com",
  projectId: "clone-9e90e",
  storageBucket: "clone-9e90e.appspot.com",
  messagingSenderId: "993317694987",
  appId: "1:993317694987:web:7ae44dc9e125c88808610e",
  measurementId: "G-38CT2Z3XH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}