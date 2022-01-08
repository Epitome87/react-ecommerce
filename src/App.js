import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInPage from './pages/signin/SignInPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/userSlice';
import { selectCurrentUser } from './redux/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop.selectors';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => selectCurrentUser(state));

  // Kept for reference: Code related to programatically adding our Collection to Firestore
  // const collectionsArray = useSelector((state) =>
  //   selectCollectionsForPreview(state)
  // );

  let unsubscribeFromAuth = null;

  const authHelper = async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  };

  useEffect(() => {
    authHelper();

    // Kept for reference: Code related to programatically adding our Collection to Firestore
    // addCollectionAndDocuments(
    //   'collections',
    //   // We only want the title and items property from each collection
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );

    // return unsubscribeFromAuth;
    // Alternate syntax for cleanup:
    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route
          path='/signin'
          element={currentUser ? <Navigate to='/' /> : <SignInPage />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
