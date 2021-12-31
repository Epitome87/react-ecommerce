import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/homepage/shop/ShopPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
