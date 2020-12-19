import firebase from 'firebase/app'
var firebaseConfig = {
    apiKey: "AIzaSyDbYXnTAqPJIenTHDz7BuTkOJ87qciMk18",
    authDomain: "userlist-assignment.firebaseapp.com",
    databaseURL: "https://userlist-assignment-default-rtdb.firebaseio.com",
    projectId: "userlist-assignment",
    storageBucket: "userlist-assignment.appspot.com",
    messagingSenderId: "201827233932",
    appId: "1:201827233932:web:5973e9b472aa32b5d0cba9"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  require('firebase/auth');
  require('firebase/database');
  require('firebase/storage');
  export default fireDb.database().ref();