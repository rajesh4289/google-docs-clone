import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAERzNtPbIrrm8bmCzm9j79yQCRiACEKPo",
  authDomain: "auth-db86a.firebaseapp.com",
  databaseURL: "https://auth-db86a-default-rtdb.firebaseio.com",
  projectId: "auth-db86a",
  storageBucket: "auth-db86a.appspot.com",
  messagingSenderId: "700716211844",
  appId: "1:700716211844:web:669e0b7ead00a8d922ecd1"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();

export { db };

