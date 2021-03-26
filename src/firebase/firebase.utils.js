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
};

export const createUserProfileDocument = async (userAuth, additionalData) =>  {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // current date y current time when invoqued

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;