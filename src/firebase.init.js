// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBLblQweW0URNOGdnEJsAKA-guL-KFugc4",
  authDomain: "estro-gadget.firebaseapp.com",
  projectId: "estro-gadget",
  storageBucket: "estro-gadget.appspot.com",
  messagingSenderId: "811737809039",
  appId: "1:811737809039:web:dfd4121f9410bbdbacb0fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;