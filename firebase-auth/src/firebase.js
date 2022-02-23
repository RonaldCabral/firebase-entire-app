// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAob1t-vFYl3A31jqfvumL9SLGsVSVefHg",
  authDomain: "fir-react-auth-87d8d.firebaseapp.com",
  projectId: "fir-react-auth-87d8d",
  storageBucket: "fir-react-auth-87d8d.appspot.com",
  messagingSenderId: "213320256973",
  appId: "1:213320256973:web:37ce73667a9468f4c5c884",
  measurementId: "G-K068BPSKEP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);