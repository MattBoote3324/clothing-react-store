import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore.collection("users"); //This would get us a collection of users.

firestore.collection("users").doc("6cSjikyLFKY8SMcO0ZbO"); //This would get me a specific document within the users collection.

firestore
  .collection("users")
  .doc("6cSjikyLFKY8SMcO0ZbO")
  .collection("cartItems"); //gets the cart items for specific user. Can keep chaining the requests.

// OR

firestore.doc("/users/6cSjikyLFKY8SMcO0ZbO/cartItems/xxx"); //This would acheive the same thing
