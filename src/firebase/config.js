import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCiooBQfQkZ0ZQmXlR131FriqMbZjuPOnw",
    authDomain: "ms-gallery.firebaseapp.com",
    projectId: "ms-gallery",
    storageBucket: "ms-gallery.appspot.com",
    messagingSenderId: "246502630939",
    appId: "1:246502630939:web:a831e70d94326247257abe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };