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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc("users/" + userAuth.uid);

  const snapShot = await userRef.get(); //Getting snapshot of userRef data

  if (!snapShot.exists) {
    //if not existent
    const { displayName, email } = userAuth; //UserAuth is the google data.

    const createdAt = new Date(); //new created date

    try {
      //we are gonna try set the new data.
      console.log(userRef);
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
