// src/firebaseConfig.js
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqdFll49kPhAgiVrPLWMUIGE7B89uXxUA",
  authDomain: "muso-ninjas-vuejs.firebaseapp.com",
  projectId: "muso-ninjas-vuejs",
  storageBucket: "muso-ninjas-vuejs.appspot.com",
  messagingSenderId: "592997645010",
  appId: "1:592997645010:web:0617848cd19027aae7cb0b",
  measurementId: "G-L9YMJ5RJYZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();

//project firestore
const projectFireStore = firebase.firestore();

//time stamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFireStore, timestamp };
