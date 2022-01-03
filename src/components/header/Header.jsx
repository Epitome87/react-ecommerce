import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

function Header() {
  const currentUser = useSelector((state) => state.user.value);
  const isCartHidden = useSelector((state) => state.cart.isHidden);

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
        <CartIcon />
      </div>
      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
}

export default Header;
