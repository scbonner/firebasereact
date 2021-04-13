//import firebase from 'firebase'
//import * as firebase from 'firebase/app';
import firebase from "firebase/app"
// import {initialize} from 'firebase';

import 'firebase/firestore';






var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  //var firebaseConfig = {
    apiKey: "AIzaSyCS6xP4yk0uIPKzJ-JZ_MivDvkE0YLjZ9s",
    authDomain: "fir-reactcontactform.firebaseapp.com",
    projectId: "fir-reactcontactform",
    storageBucket: "fir-reactcontactform.appspot.com",
    messagingSenderId: "1081959921241",
    appId: "1:1081959921241:web:6e91c056ab9f30f92b2348"
});

var db = firebaseApp.firestore();

export { db }


//Initializing app
//firebase.initializeApp(firebaseConfig);