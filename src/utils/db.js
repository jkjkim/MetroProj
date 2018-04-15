import * as firebase from "firebase";
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyAwwHteeIrQbNUj0j08kbBnqv5_Cc6TiaY",
    authDomain: "metroproj-eee5a.firebaseapp.com",
    databaseURL: "https://metroproj-eee5a.firebaseio.com",
    projectId: "metroproj-eee5a",
    storageBucket: "",
    messagingSenderId: "303517937042"
  };
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;

// add data
// db.collection("data").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });