// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY15uSnIzWZ9KNfNrDJ51RnYvc7Lfq-eU",
  authDomain: "mern-estate-711af.firebaseapp.com",
  projectId: "mern-estate-711af",
  storageBucket: "mern-estate-711af.appspot.com",
  messagingSenderId: "699567600512",
  appId: "1:699567600512:web:216bf528340159e0e60765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };