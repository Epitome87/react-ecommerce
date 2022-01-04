import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/homepage/shop/ShopPage';
import SignInPage from './pages/signin/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/userSlice';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);

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
    return unsubscribeFromAuth;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route
          path='/signin'
          element={currentUser ? <Navigate to='/' /> : <SignInPage />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
