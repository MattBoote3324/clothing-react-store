import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEtrfBjWjVaauTcKgo0msKR6ow39bwT8E",
  authDomain: "clothing-store-db-30796.firebaseapp.com",
  databaseURL: "https://clothing-store-db-30796.firebaseio.com",
  projectId: "clothing-store-db-30796",
  storageBucket: "",
  messagingSenderId: "750847315731",
  appId: "1:750847315731:web:f8432f0b1aa35e3a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const fbprovider = new firebase.auth.FacebookAuthProvider();
fbprovider.setCustomParameters({ display: "popup" });
export const signInWithFacebook = () => auth.signInWithPopup(fbprovider);

export default firebase;
