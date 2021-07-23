import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCwGfJMkFcM49Q2XzFXOz1YhizPU4JyjWg",
  authDomain: "app-share-6688e.firebaseapp.com",
  projectId: "app-share-6688e",
  storageBucket: "app-share-6688e.appspot.com",
  messagingSenderId: "135537968226",
  appId: "1:135537968226:web:2762564e9073e682a97d3b"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();