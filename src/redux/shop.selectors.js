// import { createSelector } from 'reselect';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

// reselect will select only value change
export const selectShop = (state) => state.shop;

// Create a memo-ized selector
export const selectCollections = createDraftSafeSelector(
  [selectShop],
  (shop) => shop.collections
);
