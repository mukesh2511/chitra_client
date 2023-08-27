// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfMnxeoy-nCJxqS7kx8ie58L8KjmQVE0c",
  authDomain: "video-613f6.firebaseapp.com",
  projectId: "video-613f6",
  storageBucket: "video-613f6.appspot.com",
  messagingSenderId: "737212967882",
  appId: "1:737212967882:web:fe47f74af38babfd5bbd33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
