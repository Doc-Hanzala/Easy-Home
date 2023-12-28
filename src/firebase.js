// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0w9SaEXEzkwDHxdhLFwOWNctWUGHQMPY",
  authDomain: "easy-home-react.firebaseapp.com",
  projectId: "easy-home-react",
  storageBucket: "easy-home-react.appspot.com",
  messagingSenderId: "72397746524",
  appId: "1:72397746524:web:531cb64ae1532670aed199",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
