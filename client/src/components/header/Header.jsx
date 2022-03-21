import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import CartIcon from '../cart/icon/CartIcon';
import CartDropdown from '../cart/dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import * as Styled from './Header.styles';
import LoremLogo from '../../assets/ecommerce-logo.png';

function Header() {
  // const currentUser = useSelector((state) => state.user.value);
  // const isCartHidden = useSelector((state) => state.cart.isHidden);

  // Using memoized selectors:
  // const currentUser = useSelector((state) => selectCurrentUser(state));
  // const isCartHidden = useSelector((state) => selectCartVisibility(state));
  // Even better! (But doesn't seem to work?!)
  const { currentUser, isCartHidden } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      isCartHidden: selectCartVisibility,
    })
  );

  return (
    <Styled.Header>
      <Styled.Logo to='/'>
        {/* <Logo className='logo' /> */}
        <img src={LoremLogo} alt='' />
      </Styled.Logo>
      <Styled.Options>
        <Styled.OptionNavLink to='/shop'>Shop</Styled.OptionNavLink>
        <Styled.OptionNavLink to='/shop'>Contact</Styled.OptionNavLink>
        {currentUser ? (
          <Styled.OptionNavLink as='div' onClick={() => auth.signOut()}>
            Sign Out
          </Styled.OptionNavLink>
        ) : (
          <Styled.OptionNavLink to='/signin'>Sign In</Styled.OptionNavLink>
        )}
        <CartIcon />
      </Styled.Options>
      {isCartHidden ? null : <CartDropdown />}
    </Styled.Header>
  );
}

export default Header;
