// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7jZwawXXCE-teiOi7QQl7NEDcuOo57Ns",
  authDomain: "weeding-event-management.firebaseapp.com",
  projectId: "weeding-event-management",
  storageBucket: "weeding-event-management.appspot.com",
  messagingSenderId: "1050828452996",
  appId: "1:1050828452996:web:966a84395758bdf7c37ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;