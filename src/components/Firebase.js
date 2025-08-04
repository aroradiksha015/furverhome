// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZdlxMdZ_el8PIIC74vKT0jK1StQg_Uds",
  authDomain: "fureverhome-6e843.firebaseapp.com",
  projectId: "fureverhome-6e843",
  storageBucket: "fureverhome-6e843.firebasestorage.app",
  messagingSenderId: "718414481750",
  appId: "1:718414481750:web:10c2ace06c413da6d06ef7",
  measurementId: "G-30FSV6Z6BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)