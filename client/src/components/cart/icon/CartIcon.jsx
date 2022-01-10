import React, { useEffect, useState } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../../redux/cart/cartSlice';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './CartIcon.styles';
import styled from 'styled-components';

const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

function CartIcon() {
  const [cartIsAnimating, setCartIsAnimating] = useState(false);

  const cartItems = useSelector((state) => selectCartItems(state));
  const numCartItems = cartItems.reduce(
    (totalQuantity, currentCartItem) =>
      totalQuantity + currentCartItem.quantity,
    0
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // Whenever the cart changes, add the class that animates the cart icon
    if (!cartItems || cartItems.length === 0) return;

    setCartIsAnimating(true);

    const timer = setTimeout(() => {
      setCartIsAnimating(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <Styled.CartIcon
      animate={cartIsAnimating}
      onClick={() => dispatch(toggleCartVisibility())}
    >
      <StyledShoppingIcon />
      <Styled.ItemCount>{numCartItems}</Styled.ItemCount>
    </Styled.CartIcon>
  );
}

export default CartIcon;
