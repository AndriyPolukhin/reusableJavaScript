import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyD7PN5u3dh4EuASZ8DTuXiCS5wBv0xh12I",
    authDomain: "cath-of-the-day-app.firebaseapp.com",
    databaseURL: "https://cath-of-the-day-app.firebaseio.com",
    // projectId: "cath-of-the-day-app",
    // storageBucket: "cath-of-the-day-app.appspot.com",
    // messagingSenderId: "113864774399"
  })

const base = Rebase.createClass(firebaseApp.database());


// This is a named export
export {firebaseApp};

// this is a default
export default base;