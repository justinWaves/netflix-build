import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFEgvf99VLAECE7IbIaXDhL0yTYuXK9Wc",
  authDomain: "netflix-clone-38dd5.firebaseapp.com",
  projectId: "netflix-clone-38dd5",
  storageBucket: "netflix-clone-38dd5.appspot.com",
  messagingSenderId: "355899310811",
  appId: "1:355899310811:web:20cd6f6fcbad95898202fe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
