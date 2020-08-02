import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5i4Qv9S9Bf-JwAWs1ifQxwB_F6L-v-Dc",
  authDomain: "react-shop-15648.firebaseapp.com",
  databaseURL: "https://react-shop-15648.firebaseio.com",
  projectId: "react-shop-15648",
  storageBucket: "react-shop-15648.appspot.com",
  messagingSenderId: "92961180258",
  appId: "1:92961180258:web:3e18b3fd298c30bdeb5f3b",
  measurementId: "G-T53G4NX3QB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
