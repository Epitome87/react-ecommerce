import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/homepage/shop/ShopPage';
import SignInPage from './pages/signin/SignInPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/userSlice';

function App() {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    authHelper();
    return unsubscribeFromAuth;
  }, []);


  useEffect(() => {
    console.log("CURRENT USER", currentUser);
  }, [currentUser])

  const authHelper = async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        });
      } else {
        setCurrentUser(null);
      }
    });
  };

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
