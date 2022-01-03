import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import './cart-icon.styles.scss';

function CartIcon() {
  const dispatch = useDispatch();

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;
