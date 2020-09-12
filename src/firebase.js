import firebase from 'firebase';

const firebaseApp  = firebase.initializeApp( {
    apiKey: "AIzaSyB5eoaFwjI9xYqvkRzEHyg12zRvVxtd4OU",
    authDomain: "spotify-clone-49d58.firebaseapp.com",
    databaseURL: "https://spotify-clone-49d58.firebaseio.com",
    projectId: "spotify-clone-49d58",
    storageBucket: "spotify-clone-49d58.appspot.com",
    messagingSenderId: "774024537416",
    appId: "1:774024537416:web:f9a6ebe8d9c53901303f7d",
    measurementId: "G-RZH7FLHZCR"
  });



  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();

  export { db, auth, storage}