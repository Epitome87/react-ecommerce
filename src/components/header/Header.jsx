import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

function Header() {
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
      </div>
    </div>
  );
}

export default Header;
