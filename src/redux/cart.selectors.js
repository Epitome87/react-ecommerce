import { createSelector } from 'reselect';

// reselect will select only value change
const selectCart = (state) => state.cart;

// Create a memo-ized selector
export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.isHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, currentCartItem) =>
        totalQuantity + currentCartItem.quantity,
      0
    )
);
