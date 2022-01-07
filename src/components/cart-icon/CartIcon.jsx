import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../redux/cartSlice';
import { selectCartItems } from '../../redux/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './CartIconContainer';
import styled from 'styled-components';

const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

function CartIcon() {
  // const numCartItems = useSelector((state) => selectCartItemsCount(state));
  const cartItems = useSelector((state) => selectCartItems(state));
  const numCartItems = cartItems.reduce(
    (totalQuantity, currentCartItem) =>
      totalQuantity + currentCartItem.quantity,
    0
  );

  const dispatch = useDispatch();

  return (
    <Styled.CartIcon onClick={() => dispatch(toggleCartVisibility())}>
      <StyledShoppingIcon />
      <Styled.ItemCount>{numCartItems}</Styled.ItemCount>
    </Styled.CartIcon>
  );
}

export default CartIcon;
