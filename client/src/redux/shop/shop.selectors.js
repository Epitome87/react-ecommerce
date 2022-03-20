import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
// reselect will select only value change
export const selectShop = (state) => state.shop;

// Create a memo-ized selector for the entire Collections
export const selectCollections = createDraftSafeSelector(
  [selectShop],
  (shop) => shop.collections
);

// A version of our Collections that is suitable for our CollectionsPreview component
export const selectCollectionsForPreview = createDraftSafeSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// Select an individual Collection based on the URL
export const selectCollection = (collectionUrlParam) =>
  createDraftSafeSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

// Select whether or not we are in the process of fetching Collection state (for loading, etc)
export const selectIsCollectionFetching = createDraftSafeSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// Select whether or not the Collection has finished being fetched / loaded
export const selectIsCollectionsLoaded = createDraftSafeSelector(
  [selectShop],
  (shop) => !!shop.collections
);

// Select an individual Product of an individual Collection
// export const selectProduct1 = (collectionUrlParam, productUrlParam) =>
//   createDraftSafeSelector(
//     [(state) => state.shop.collections[collectionUrlParam]],
//     (collection) =>
//       collection.items.find((item) => item.id.toString() === productUrlParam)
//   );

// This also works! So to use selector with params, just call it like a normal function
export const selectProduct = (collectionUrlParam, productUrlParam) =>
  createDraftSafeSelector(
    [selectCollection(collectionUrlParam)],
    (collection) =>
      collection.items.find((item) => item.id.toString() === productUrlParam)
  );
