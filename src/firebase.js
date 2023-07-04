import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAarOxpqblHFgnppUK_ioTg99BEZtx56QY",
  authDomain: "slack-clone-mahir.firebaseapp.com",
  projectId: "slack-clone-mahir",
  storageBucket: "slack-clone-mahir.appspot.com",
  messagingSenderId: "280431073261",
  appId: "1:280431073261:web:3d912d8c24a4216a44f9e4",
  measurementId: "G-K0S88MXJKT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,db,provider};