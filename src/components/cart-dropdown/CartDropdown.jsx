import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart.selectors';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const navigate = useNavigate();

  // Render cart items (or empty cart message)
  const renderedCartItems = cartItems.length ? (
    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
  ) : (
    <span className='empty-message'>Your cart is empty</span>
  );

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{renderedCartItems}</div>
      <Button onClick={() => navigate('/checkout')}>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
