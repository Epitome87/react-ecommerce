// import { createSelector } from 'reselect';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

// reselect will select only value change
export const selectShop = (state) => state.shop;

// Create a memo-ized selector
export const selectCollections = createDraftSafeSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createDraftSafeSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createDraftSafeSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
