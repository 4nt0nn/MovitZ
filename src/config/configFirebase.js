import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY0TYsMVyD5kikUV5kKvIMhdZPx0H0qtc",
  authDomain: "movitz-9ff33.firebaseapp.com",
  databaseURL: "https://movitz-9ff33.firebaseio.com",
  projectId: "movitz-9ff33",
  storageBucket: "movitz-9ff33.appspot.com",
  messagingSenderId: "894566147850",
  appId: "1:894566147850:web:a425dc6609374d64bafcf3",
  measurementId: "G-SJ521ETY70",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
