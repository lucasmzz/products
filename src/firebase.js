import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1akHLVK0srLo8lrQ0h2k_XPXmgby2wfs",
  authDomain: "products-69b53.firebaseapp.com",
  projectId: "products-69b53",
  storageBucket: "products-69b53.appspot.com",
  messagingSenderId: "664042234233",
  appId: "1:664042234233:web:073c0bec9ef6a6ebbf8fa8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
