import firebase from "firebase/app";
import { instance } from "./instance";

const googleProvider = new firebase.auth.GoogleAuthProvider();

const { auth } = firebase;

export const signUp = async ({ email, pass, firstName, lastName }) => {
  await auth().createUserWithEmailAndPassword(email, pass);
  const { currentUser } = auth();
  currentUser.sendEmailVerification();
  currentUser.updateProfile({
    displayName: `${firstName} ${lastName}`,
  });
  return currentUser;
};

export const signIn = ({ email, password }) => {
  return instance.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithGoogle = () => {
  return instance
    .auth()
    .signInWithPopup(googleProvider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(result);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};
