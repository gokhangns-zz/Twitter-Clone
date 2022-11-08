import firebase from "firebase";
import "firebase/database";


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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firebasestore();
export default db;