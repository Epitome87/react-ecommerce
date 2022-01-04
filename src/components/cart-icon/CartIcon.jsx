import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../redux/cartSlice';
import { selectCartItemsCount } from '../../redux/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';
import './cart-icon.styles.scss';

function CartIcon() {
  // const numCartItems = useSelector((state) => selectCartItemsCount(state));
  const cartItems = useSelector((state) => state.cart.cartItems);
  const numCartItems = cartItems.reduce(
    (totalQuantity, currentCartItem) =>
      totalQuantity + currentCartItem.quantity,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{numCartItems}</span>
    </div>
  );
}

export default CartIcon;
