// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbeWlZCglsWo8924_weMmhGYADKcSQU2U",
  authDomain: "task-management-888c7.firebaseapp.com",
  projectId: "task-management-888c7",
  storageBucket: "task-management-888c7.appspot.com",
  messagingSenderId: "486002462567",
  appId: "1:486002462567:web:642c6003a1bb3c40d029c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app