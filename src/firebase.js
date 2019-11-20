// Your web app's Firebase configuration
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-EAUhqPpCL2ldq_T36ol1jul1cMph9P0",
    authDomain: "crud-udemy-560fc.firebaseapp.com",
    databaseURL: "https://crud-udemy-560fc.firebaseio.com",
    projectId: "crud-udemy-560fc",
    storageBucket: "crud-udemy-560fc.appspot.com",
    messagingSenderId: "587826597138",
    appId: "1:587826597138:web:dc8c6e514ffe1828e977cb"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()