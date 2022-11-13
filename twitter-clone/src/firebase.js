import firebase from "firebase";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmfKRPpWnIGw_CTdXPfRdhhBsmYG8eXvc",
    authDomain: "twitter-clone-react-e2f30.firebaseapp.com",
    projectId: "twitter-clone-react-e2f30",
    storageBucket: "twitter-clone-react-e2f30.appspot.com",
    messagingSenderId: "481168373223",
    appId: "1:481168373223:web:57f6e2ca230df5884e3942",
    measurementId: "G-6RBDQF94LG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();

const db = firebase.firestore();

export default db;
