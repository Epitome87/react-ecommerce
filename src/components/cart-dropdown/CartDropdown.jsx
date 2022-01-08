import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart.selectors';
import { toggleCartVisibility } from '../../redux/cartSlice';
import * as Styled from './CartDropdown.styles';

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
    <Styled.EmptyMessage>Your cart is empty</Styled.EmptyMessage>
  );

  return (
    <Styled.CartDropdown>
      <Styled.CartItems>{renderedCartItems}</Styled.CartItems>
      <Styled.ButtonContainer onClick={handleCheckoutClick}>
        Go to Checkout
      </Styled.ButtonContainer>
    </Styled.CartDropdown>
  );
}

export default CartDropdown;
