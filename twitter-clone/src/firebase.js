
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCtoEhudx5ddvg8HW6zlg-lm3XMxOOdXf0",
    authDomain: "clone-twitter-b0787.firebaseapp.com",
    projectId: "clone-twitter-b0787",
    storageBucket: "clone-twitter-b0787.appspot.com",
    messagingSenderId: "867102987851",
    appId: "1:867102987851:web:459c363ca7e5a0cb811fce"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;


