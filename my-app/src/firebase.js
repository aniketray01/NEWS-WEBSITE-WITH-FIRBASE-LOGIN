// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB_uU_AmvPLtHq1elJLNIHyNE1PT5PJ9K0",
  authDomain: "auth-138a3.firebaseapp.com",
  projectId: "auth-138a3",
  storageBucket: "auth-138a3.appspot.com",
  messagingSenderId: "478369852792",
  appId: "1:478369852792:web:1944215e177e382faeec8d",
  measurementId: "G-P8TTQY2GXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export{app,auth};