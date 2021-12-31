import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

function Header({ currentUser }) {
  return (
    <div className='header'>
      <NavLink to='/' className='logo-container'>
        <Logo className='logo' />
      </NavLink>
      <div className='options'>
        <NavLink to='/shop' className='option'>
          Shop
        </NavLink>
        <NavLink to='/shop' className='option'>
          Contact
        </NavLink>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink className='option' to='/signin'>
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
