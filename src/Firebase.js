import firebase from "firebase";

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
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const addFavorite = (id, src, download_url, photographer) => {
  db.collection("favorite-photo")
    .add({
      id: id,
      download_url: download_url,
      src: src,
      photographer: photographer,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};
