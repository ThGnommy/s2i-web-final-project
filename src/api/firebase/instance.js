import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDitycBjtwo-9fptEyK3hWRfbXNKXNX4BY",
  authDomain: "pexel-9395d.firebaseapp.com",
  databaseURL: "https://pexel-9395d.firebaseio.com",
  projectId: "pexel-9395d",
  storageBucket: "pexel-9395d.appspot.com",
  messagingSenderId: "685383064213",
  appId: "1:685383064213:web:c695e2c3980ec53967d99c",
};

// Initialize Cloud Firestore through Firebase
export const instance = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
