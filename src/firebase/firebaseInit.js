import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDWkgiLoxr9p3ZMvW-qUQRO4iSCtL7-eMk",
  authDomain: "the-invoice-30c2e.firebaseapp.com",
  projectId: "the-invoice-30c2e",
  storageBucket: "the-invoice-30c2e.appspot.com",
  messagingSenderId: "879604920212",
  appId: "1:879604920212:web:251bfb807e8a260f292981",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
