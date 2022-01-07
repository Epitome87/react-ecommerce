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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    // We are concerned only with the title and items properties of the document's data
    const { title, items } = doc.data();

    // Our desired output is an object that includes the above properties, as well as the route name and doc ID
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    // Create object where the titles of the collections are the keys, equaling their respective collection object
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Ensure the User Auth object is even valid
  if (!userAuth) return;

  // Find the user document in the Firebase store
  const userRef = firestore.collection('users').doc(userAuth.uid);
  const snapShot = await userRef.get();

  // Create this User document if it doesn't already exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error creating User', err.message);
    }
  }

  return userRef;
};

// Kept for reference: Code related to programatically adding our Collection to Firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    // Get a new doc ref in this collection and randomly generate ID
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
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

// // Can query by:
// firebase
//   .collection('users')
//   .doc('K9MUMLud1hATsTkzFSQY')
//   .collection('cartItems')
//   .doc('Hgnm2IIXLh5SpzDVM3Qy');

// // Can also do:
// firebase.doc('users/K9MUMLud1hATsTkzFSQY/cartItems/Hgnm2IIXLh5SpzDVM3Qy');

// // Can do same path-syntax with collections:
// firebase.collection('users/K9MUMLud1hATsTkzFSQY/cartItems');
