import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAA447zs2p6ViTljLe7BJ3UeRfDcoB28Qk",
    authDomain: "very-hot-burgers-47222.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-47222-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "very-hot-burgers-47222",
//   storageBucket: "very-hot-burgers-47222.appspot.com",
//   messagingSenderId: "552822430181",
//   appId: "1:552822430181:web:bfcc7093ae0f931fc2b70c"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;