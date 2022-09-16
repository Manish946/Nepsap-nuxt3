// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = useRuntimeConfig();
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: "nepsap-website.firebaseapp.com",
  projectId: "nepsap-website",
  storageBucket: "nepsap-website.appspot.com",
  messagingSenderId: "1012381467635",
  appId: "1:1012381467635:web:f655c0ce88fcfcee030886",
  measurementId: "G-8W345Q1GKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("FireBase 1")
export const firestoreDB = getFirestore(app);

