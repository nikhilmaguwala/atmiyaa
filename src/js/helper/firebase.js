// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8vwguzFQAy9fUx2a2PVTJz4SBtiYX0Qk",
  authDomain: "atmiya-db.firebaseapp.com",
  projectId: "atmiya-db",
  storageBucket: "atmiya-db.appspot.com",
  messagingSenderId: "812615195914",
  appId: "1:812615195914:web:9aa5be83fe01a923352ef3",
  measurementId: "G-2GZLTJ70RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
