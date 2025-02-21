// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVsRHY9Gk1ec6aQUyVhrUZtBpA05LPrX4',
  authDomain: 'todo-scic.firebaseapp.com',
  projectId: 'todo-scic',
  storageBucket: 'todo-scic.firebasestorage.app',
  messagingSenderId: '805321311894',
  appId: '1:805321311894:web:67634561ff0b649863e4b7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
