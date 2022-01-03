import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const renderedCartItems = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} item={cartItem} />
  ));

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{renderedCartItems}</div>
      <Button>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
