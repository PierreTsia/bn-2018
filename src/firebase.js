import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDEX1SstQK3zBIF_e5zTsWFZpF-McpceD8",
  authDomain: "bn-2018.firebaseapp.com",
  databaseURL: "https://bn-2018.firebaseio.com",
  projectId: "bn-2018",
  storageBucket: "bn-2018.appspot.com",
  messagingSenderId: "1063088426054",
});

export default firebase;
