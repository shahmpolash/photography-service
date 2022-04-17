// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_rsvof-aCRK4aUSRi2Z4QmXX7ZyapN5M",
  authDomain: "shah-photography-services.firebaseapp.com",
  projectId: "shah-photography-services",
  storageBucket: "shah-photography-services.appspot.com",
  messagingSenderId: "1042859565389",
  appId: "1:1042859565389:web:575bc062e503ee316e1704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;