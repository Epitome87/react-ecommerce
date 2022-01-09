// import { createSelector } from 'reselect';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

// reselect will select only value change
const selectCart = (state) => state.cart;

// Create a memo-ized selector
export const selectCartVisibility = createDraftSafeSelector(
  [selectCart],
  (cart) => cart.isHidden
);

export const selectCartItems = createDraftSafeSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createDraftSafeSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, currentCartItem) =>
        totalQuantity + currentCartItem.quantity,
      0
    )
);

export const selectCartTotal = createDraftSafeSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, currentCartItem) =>
        totalQuantity + currentCartItem.quantity * currentCartItem.price,
      0
    )
);
