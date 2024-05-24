// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8JpWbCnSL-ici2JO5Krq8tm5OpOrTG4w",
  authDomain: "touchui-d3122.firebaseapp.com",
  projectId: "touchui-d3122",
  storageBucket: "touchui-d3122.appspot.com",
  messagingSenderId: "292810185079",
  appId: "1:292810185079:web:6f066a83d055467da2e972",
  databaseURL: "https://touchui-d3122-default-rtdb.firebaseio.com/"


};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getDatabase(app);