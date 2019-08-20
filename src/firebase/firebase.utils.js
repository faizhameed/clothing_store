import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyAHZUQKKca6Nj9qQEuzjeN3JgE_GOOk3y4",
    authDomain: "clothingstore-db-74c09.firebaseapp.com",
    databaseURL: "https://clothingstore-db-74c09.firebaseio.com",
    projectId: "clothingstore-db-74c09",
    storageBucket: "",
    messagingSenderId: "121175846361",
    appId: "1:121175846361:web:abe6d8609026a0c1"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore =  firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const  signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;