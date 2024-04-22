

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn4wL3G2GbeEYpqydCGUNVM2lOcmF8PAA",
  authDomain: "rooook-39f9b.firebaseapp.com",
  projectId: "rooook-39f9b",
  storageBucket: "rooook-39f9b.appspot.com",
  messagingSenderId: "377699163294",
  appId: "1:377699163294:web:2f538c8036f8cd82b2af8f",
  measurementId: "G-PM9CQMKPCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage()
const storageRef = ref(storage)
const imagesRef = ref(storageRef, 'images')