import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/homepage/shop/ShopPage';
import SignInPage from './pages/signin/SignInPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    authHelper();
    return unsubscribeFromAuth;
  }, []);

  const authHelper = async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      await createUserProfileDocument(user);
      setCurrentUser(user);
      console.log(user);
    });
  };

  return (
    <React.Fragment>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
