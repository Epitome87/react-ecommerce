import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgOGgTbidA5euJ3PWlTF-gOB7PT-Pa7yk',
  authDomain: 'react-ecommerce-44706.firebaseapp.com',
  projectId: 'react-ecommerce-44706',
  storageBucket: 'react-ecommerce-44706.appspot.com',
  messagingSenderId: '620573420592',
  appId: '1:620573420592:web:8621babe284ab6428991f5',
  measurementId: 'G-PPPPPKZZS7',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google AUthentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
