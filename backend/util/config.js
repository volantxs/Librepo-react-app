process.env.GOOGLE_APPLICATION_CREDENTIALS ="librepo-erevald-firebase-adminsdk-r9lxr-04102d7b66.json" 
const firebase = require('firebase-admin');
const firebaseConfig = {
    apiKey: "AIzaSyCHSG2DeMvetR7PnXdeyzrELkw8fJXwOh0",
    authDomain: "librepo-erevald.firebaseapp.com",
    projectId: "librepo-erevald",
    storageBucket: "librepo-erevald.appspot.com",
    messagingSenderId: "184976154092",
    appId: "1:184976154092:web:2dacf8b6923c113ccb74c9"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const User = db.collection("Readers");
// module.exports = User;