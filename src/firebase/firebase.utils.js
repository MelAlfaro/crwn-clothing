import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6c7LR_p_JXmatNZEKuH2NpoPFZEjLWYo",
    authDomain: "crwn-db-809a7.firebaseapp.com",
    projectId: "crwn-db-809a7",
    storageBucket: "crwn-db-809a7.appspot.com",
    messagingSenderId: "547896715612",
    appId: "1:547896715612:web:912a3876b5c973b9897999",
    measurementId: "G-WVVCWPBPXN"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;