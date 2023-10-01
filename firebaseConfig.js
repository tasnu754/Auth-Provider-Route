// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO7n32aSNwcfSxwdIvTMERQKoTQlDqxJs",
  authDomain: "auth-privateropute.firebaseapp.com",
  projectId: "auth-privateropute",
  storageBucket: "auth-privateropute.appspot.com",
  messagingSenderId: "603730876012",
  appId: "1:603730876012:web:3c5db8f2fdd41971842a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;