import React from 'react';
import Button from '../button/Button';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <Button>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
