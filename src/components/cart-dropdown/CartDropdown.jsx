import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart.selectors';
import { toggleCartVisibility } from '../../redux/cartSlice';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/checkout');
    dispatch(toggleCartVisibility());
  };

  // Render cart items (or empty cart message)
  const renderedCartItems = cartItems.length ? (
    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
  ) : (
    <span className='empty-message'>Your cart is empty</span>
  );

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{renderedCartItems}</div>
      <Button onClick={handleCheckoutClick}>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
