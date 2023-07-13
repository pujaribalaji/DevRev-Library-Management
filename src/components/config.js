// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCa0U2tWZ_PtI3m93HSETa7wuInRaYz-x0",
  authDomain: "gobooks-392612.firebaseapp.com",
  projectId: "gobooks-392612",
  storageBucket: "gobooks-392612.appspot.com",
  messagingSenderId: "780067025997",
  appId: "1:780067025997:web:364dce61f7aef9f09d1804",
  measurementId: "G-L4XF7DY898",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
export default auth;
