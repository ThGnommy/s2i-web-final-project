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
  return instance.auth().signInWithRedirect(googleProvider);
};

export const signOutWithGoogle = () => {
  return instance
    .auth()
    .signOut()
    .then(() => {
      console.log("Signout successfull!");
      window.location.reload();
    })
    .catch(function (error) {
      throw Promise.reject(error);
    });
};

export const getUserAvatar = () => {
  instance.auth().getRedirectResult();
};
