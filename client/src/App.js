import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import { HomePage, ShopPage, SignInPage, CheckoutPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userSlice';
import { selectCurrentUser } from './redux/user/user.selectors';
import { GlobalStyle } from './global.styles';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => selectCurrentUser(state));

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

    // Component cleanup
    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
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
